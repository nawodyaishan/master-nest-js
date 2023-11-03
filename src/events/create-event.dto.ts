import { EventEntity } from './event.entity';

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

export interface CreateEventDto extends Person {}

export interface Person {
  name: string;
  age: number;
  healthStatus: Health;
}

export interface removeResponse {
  eventList: EventEntity[];
  message: string;
}
