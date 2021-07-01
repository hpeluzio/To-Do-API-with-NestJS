import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ length: 500 })
  // name: string;

  @Column()
  description: string;

  // @Column()
  // filename: string;

  // @Column('int')
  // views: number;

  @Column()
  completed: boolean;
}
