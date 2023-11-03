import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';

@Module({
  // The `controllers` array specifies the controllers to be registered within this module.
  // Controllers handle incoming HTTP requests and define the API endpoints.
  controllers: [EventsController],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '4453',
      database: 'nest-events',
      entities: [EventEntity],
      synchronize: true,
    }),
  ],
  // The `providers` array defines the services that can be injected into other components.
  // Services encapsulate the business logic of the application.
  providers: [EventsService],
})
export class EventsModule {}
