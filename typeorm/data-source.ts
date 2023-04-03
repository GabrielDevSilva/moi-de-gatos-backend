import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { CreateCatBreed1679535215637 } from './migrations/1679535215637-CreateCatBreed';

dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env',
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: [CreateCatBreed1679535215637],
});

export default dataSource;
