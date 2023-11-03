import { PersonEntity } from './create-event.dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // This should be a relation, not a simple column
  @OneToMany(() => PersonEntity, (person) => person.event) // assuming 'event' is a field in PersonEntity pointing back to EventEntity
  personList: PersonEntity[];

  @Column()
  when: Date;
}
