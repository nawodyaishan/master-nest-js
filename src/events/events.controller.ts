import { Body, Controller, Delete, Get, HttpCode, Logger, Param, Patch, Post } from "@nestjs/common";
import { EventsService } from "./events.service";
import { CreateEventDto, HealthUtils, removeResponse } from "./create-event.dto";
import { EventEntity } from "./event.entity";

@Controller("/events")
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  private events: EventEntity[] = [];

  constructor(
    private readonly eventsService: EventsService
  ) {
  }

  /**
   * Get all events.
   *
   * @returns An array of EventEntity objects.
   */
  @Get()
  findAll(): EventEntity[] {
    this.logger.log("GET request received for /events");
    return this.events;
  }

  /**
   * Get an event by ID.
   *
   * @param id - The ID of the event to retrieve.
   * @returns An array of Person objects associated with the event.
   */
  @Get(":id")
  findOne(@Param("id") id: number): EventEntity {
    this.logger.log(`GET request received for /events/${id}`);
    const eventWithId = this.events.find((event) => (event.id = id));
    this.logger.log(eventWithId.id);
    return eventWithId;
  }

  /**
   * Create a new event.
   *
   * @param person - The data for the new event.
   * @returns A success message.
   */
  @Post()
  create(@Body() person: CreateEventDto): string {
    try {
      this.logger.log("POST request received for /events", person);
      this.logger.log(
        "POST request received for /events",
        HealthUtils.displayHealth(person.healthStatus)
      );
      this.events.push(this.eventsService.getEvent([person]));
      return "Event Created Successfully";
    } catch (e) {
      this.logger.log(e);
    }
  }

  /**
   * Create multiple events.
   *
   * @param inputs - An array of data for creating multiple events.
   * @returns An array of names for the created events.
   */
  @Post("/all")
  createAll(@Body() inputs: CreateEventDto[]): string[] {
    try {
      const persons: string[] = [];
      this.events.push(this.eventsService.getEvent(inputs));
      inputs.forEach((person) => {
        this.logger.log("POST request received for /events", person);
        this.logger.log(
          "POST request received for /events",
          HealthUtils.displayHealth(person.healthStatus)
        );
        persons.push(person.name);
        return persons;
      });
      return persons;
    } catch (e) {
      this.logger.log(e);
    }
  }

  /**
   * Update an event by ID.
   *
   * @param id - The ID of the event to update.
   * @param eventEntity
   * @returns A string indicating the updated event.
   */
  @Patch(":id")
  update(@Param("id") id: number, @Body() eventEntity: EventEntity) {
    try {
      this.logger.log(`PATCH request received for /events/${eventEntity}`);
      const eventById = this.events.find((event) => (event.id = id));
      eventById.id = eventEntity.id;
      eventById.when = eventEntity.when;
      eventById.personList = eventEntity.personList;
      return eventById;
    } catch (e) {
      this.logger.log(e);
    }
  }

  /**
   * Remove an event by ID.
   *
   * @param id - The ID of the event to remove.
   * @returns A string indicating the removed event.
   */
  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string): removeResponse {
    this.logger.log(`DELETE request received for /events/${id}`);
    const eventToRemove = this.events.find(
      (event) => event.id === parseInt(id)
    );

    if (eventToRemove) {
      this.events = this.events.filter(
        (event) => event.id !== eventToRemove.id
      );
      this.logger.log(`DELETE request successful for /events/${id}`);
      this.logger.log(
        `DELETE request successful for /events/${this.events.map((e) => e.id)}`
      );
      return { eventList: this.events, message: "DELETE request successful" };
    } else {
      this.logger.log(`DELETE request failed for /events/${id}`);
      return { eventList: this.events, message: "Event not found" };
    }
  }
}
