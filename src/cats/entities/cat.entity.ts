import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BreedEntity } from './breed.entity';

@Entity()
export class CatEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  age: number;

  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // breed: string;

  @ManyToOne((type) => BreedEntity, (cats) => CatEntity, { eager: true })
  breed: BreedEntity;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
