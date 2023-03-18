import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'configs/typeorm.config';
import { BreedEntity } from './entities/breed.entity';
import { BreedsService } from './breed.service';
import { BreedsController } from './breed.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([BreedEntity]),
  ],
  providers: [BreedsService],
  controllers: [BreedsController],
})
export class BreedsModule {}
