import { Health } from './events.controller';

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

export interface CreateEventDto {
  name: string;
  age: number;
  healthStatus: Health;
}

// export class CreateEventDto extends PartialType(CreateEventDto) {
//   name: string;
//   age: number;
//   healthStatus: Health;
// }
