import { Injectable } from '@nestjs/common';
import { Person } from './create-event.dto';
import { EventEntity } from './event.entity';

// The @Injectable() decorator marks this class as a service.
@Injectable()
export class EventsService {
  getHello(): string {
    return 'Hello World!';
  }
  getPerson(person: Person): EventEntity {
    const newId = Math.floor(Math.random() * 1000);
    return {
      id: newId,
      personList: person,
      when: this.getRandomDate(),
    };
  }
  getRandomDate(): Date {
    const randomYear = Math.floor(Math.random() * (2100 - 1970 + 1)) + 1970;
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 31) + 1;
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
    const randomMilliseconds = Math.floor(Math.random() * 1000);
    return new Date(
      randomYear,
      randomMonth,
      randomDay,
      randomHours,
      randomMinutes,
      randomSeconds,
      randomMilliseconds,
    );
  }
}
