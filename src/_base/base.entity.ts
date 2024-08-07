import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,

} from 'typeorm';

@Entity()
export abstract class BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ length: 50, nullable: true })
  createdBy?: string;

  @Column({ length: 50, nullable: true })
  updatedBy?: string;

}
