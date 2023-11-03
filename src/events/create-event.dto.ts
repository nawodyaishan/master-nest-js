import { EventEntity } from './event.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

export interface CreateEventDto extends PersonEntity {}

export interface Person extends PersonEntity {}

export interface removeResponse {
  eventList: EventEntity[];
  message: string;
}

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: Health,
    default: Health.Fine,
  })
  healthStatus: Health;

  // Relation back to the EventEntity
  @ManyToOne(() => EventEntity, (event) => event.personList)
  @JoinColumn() // This decorator is optional if you use default column names
  event: EventEntity;
}
