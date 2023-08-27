import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll() {}

  @Get()
  findOne() {}

  @Post()
  create() {}

  @Patch()
  update() {}

  @Delete()
  remove() {}
}
