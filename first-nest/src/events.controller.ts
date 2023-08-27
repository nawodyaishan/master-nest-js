import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common'; // Import the Logger module
import { EventsService } from './events.service';
import { AppService } from './app.service';
import { CreateEventDto, HealthUtils } from './create-event.dto';
import { EventEntity } from './event.entity';

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  private events: EventEntity[] = [];

  constructor(
    private readonly eventsService: EventsService,
    private readonly appService: AppService,
  ) {}

  @Get()
  findAll() {
    this.logger.log('GET request received for /events');
    return this.events;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    this.logger.log(`GET request received for /events/${id}`);
    const eventWithId = this.events.find((event) => event.id === id);
    this.logger.log(eventWithId);
    return eventWithId.personList;
  }

  @Post()
  create(@Body() person: CreateEventDto) {
    try {
      this.logger.log('POST request received for /events', person);
      this.logger.log(
        'POST request received for /events',
        HealthUtils.displayHealth(person.healthStatus),
      );
      this.events.push(this.eventsService.getPerson(person));
      return this.appService.getString(person.name);
    } catch (e) {
      this.logger.log(e);
    }
  }

  @Post('/all')
  createAll(@Body() inputs: CreateEventDto[]) {
    try {
      const persons: string[] = [];
      inputs.map((person) => {
        this.logger.log('POST request received for /events', person);
        this.logger.log(
          'POST request received for /events',
          HealthUtils.displayHealth(person.healthStatus),
        );
        this.events.push(this.eventsService.getPerson(person));
        persons.push(person.name);
      });
      return persons;
    } catch (e) {
      this.logger.log(e);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: any) {
    this.logger.log(`PATCH request received for /events/${id}`);
    return this.appService.getString(id + ' ' + input);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.logger.log(`DELETE request received for /events/${id}`);
    return this.appService.getString(id);
  }
}
