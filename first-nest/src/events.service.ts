import { Injectable } from '@nestjs/common';

// The @Injectable() decorator marks this class as a service.
@Injectable()
export class EventsService {
  getHello(): string {
    return 'Hello World!';
  }
}
