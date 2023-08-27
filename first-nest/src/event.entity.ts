import { CreateEventDto } from './create-event.dto';

export class EventEntity {
  id: number;
  personList: CreateEventDto;
  when: Date;
}
