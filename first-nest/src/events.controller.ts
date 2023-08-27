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

export enum Health {
  Fine,
  Bad,
}

export class HealthUtils {
  static displayHealth(health: Health): string {
    switch (health) {
      case Health.Fine:
        return 'Fine';
      case Health.Bad:
        return 'Bad';
      default:
        return 'Unknown';
    }
  }
}

export interface Person {
  name: string;
  age: number;
  healthStatus: Health;
}

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name); // Create a Logger instance

  constructor(
    private readonly eventsService: EventsService,
    private readonly appService: AppService,
  ) {}

  @Get()
  findAll() {
    this.logger.log('GET request received for /events');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log(`GET request received for /events/${id}`);
    return this.appService.getString(id);
  }

  @Post()
  create(@Body() input: Person) {
    try {
      this.logger.log('POST request received for /events', input);
      this.logger.log(
        'POST request received for /events',
        HealthUtils.displayHealth(input.healthStatus),
      );
      return this.appService.getString(input.name);
    } catch (e) {
      this.logger.log(e);
    }
  }

  @Post('/all')
  createAll(@Body() inputs: Person[]) {
    try {
      const persons: string[] = [];
      inputs.map((person) => {
        this.logger.log('POST request received for /events', person);
        this.logger.log(
          'POST request received for /events',
          HealthUtils.displayHealth(person.healthStatus),
        );
        persons.push(this.appService.getString(person.name));
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
