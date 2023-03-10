import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './entities/cat.entity';
import { TypeOrmConfig } from 'src/configs/typeorm.config';
import { BreedEntity } from './entities/breed.entity';
import { BreedsService } from './breed.service';
import { BreedsController } from './breed.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([CatEntity, BreedEntity]),
  ],
  providers: [CatsService, BreedsService],
  controllers: [CatsController, BreedsController],
})
export class CatsModule {}
