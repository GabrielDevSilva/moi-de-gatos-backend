import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { BreedEntity } from '../breeds/entities/breed.entity';
import { CatEntity } from '../cats/entities/cat.entity';
dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env',
});

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  // entities: [CatEntity, BreedEntity],
  // entities: ['../**/entities/*.entity.ts'],
  synchronize: process.env.ENV === 'development',
};
