import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  // The `controllers` array specifies the controllers to be registered within this module.
  // Controllers handle incoming HTTP requests and define the API endpoints.
  controllers: [EventsController],

  // The `providers` array defines the services that can be injected into other components.
  // Services encapsulate the business logic of the application.
  providers: [EventsService],
})
export class EventsModule {}
