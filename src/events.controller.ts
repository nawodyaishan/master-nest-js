// Import necessary modules and decorators from external libraries
import {
  Body, // Used for parsing request body data
  Controller, // Decorator for defining a controller class
  Delete, // HTTP DELETE method decorator
  Get, // HTTP GET method decorator
  HttpCode, // Decorator for specifying HTTP response code
  Param, // Decorator for accessing route parameters
  Patch, // HTTP PATCH method decorator
  Post, // HTTP POST method decorator
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm'; // Dependency injection for TypeORM repository
import { Repository } from 'typeorm'; // TypeORM repository
import { CreateEventDto } from './create-event.dto'; // DTO (Data Transfer Object) for creating events
import { Event } from './event.entity'; // Entity for events
import { UpdateEventDto } from './update-event.dto'; // DTO for updating events

@Controller('/events') // Decorator to define this class as a controller with a base route path of '/events'
export class EventsController {
  constructor(
    @InjectRepository(Event) // Inject the Event entity repository from TypeORM
    private readonly repository: Repository<Event>, // Declare a private property to hold the repository
  ) {}

  @Get() // Decorator to define a GET route handler
  async findAll() {
    // Asynchronous function to handle GET requests for all events
    return await this.repository.find(); // Return all events from the repository
  }

  @Get(':id') // Decorator to define a GET route handler with a parameter ':id'
  async findOne(@Param('id') id) {
    // Asynchronous function to handle GET requests for a specific event by ID
    return await this.repository.findOne(id); // Return the event with the specified ID from the repository
  }

  @Post() // Decorator to define a POST route handler
  async create(@Body() input: CreateEventDto) {
    // Asynchronous function to handle POST requests to create a new event
    return await this.repository.save({
      ...input, // Spread the properties of the input object
      when: new Date(input.when), // Convert the 'when' property to a Date object
    });
  }

  @Patch(':id') // Decorator to define a PATCH route handler with a parameter ':id'
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    // Asynchronous function to handle PATCH requests to update an event
    const event = await this.repository.findOne(id); // Find the event by ID

    return await this.repository.save({
      ...event, // Spread the properties of the existing event
      ...input, // Spread the properties from the input object
      when: input.when ? new Date(input.when) : event.when, // Update the 'when' property if it exists in the input
    });
  }

  @Delete(':id') // Decorator to define a DELETE route handler with a parameter ':id'
  @HttpCode(204) // Set the HTTP response code to 204 (No Content)
  async remove(@Param('id') id) {
    // Asynchronous function to handle DELETE requests to remove an event
    const event = await this.repository.findOne(id); // Find the event by ID
    await this.repository.remove(event); // Remove the event from the repository
  }
}
