import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedEntity } from './entities/breed.entity';
import { BreedsService } from './breed.service';
import { BreedsController } from './breed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BreedEntity])],
  providers: [BreedsService],
  controllers: [BreedsController],
})
export class BreedsModule {}
