import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BreedEntity } from '../../breeds/entities/breed.entity';

@Entity('cats')
export class CatEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
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
