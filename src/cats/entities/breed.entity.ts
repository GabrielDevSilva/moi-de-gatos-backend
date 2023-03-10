import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CatEntity } from './cat.entity';

@Entity()
export class BreedEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  breed: string;

  @OneToMany((type) => CatEntity, (breed) => BreedEntity)
  cats: CatEntity[];
}
