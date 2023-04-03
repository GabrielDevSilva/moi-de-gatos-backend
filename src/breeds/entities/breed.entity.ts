import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CatEntity } from '../../cats/entities/cat.entity';

@Unique(['breed'])
@Entity('breeds')
export class BreedEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  breed: string;

  @OneToMany((type) => CatEntity, (breed) => BreedEntity)
  cats: CatEntity[];
}
