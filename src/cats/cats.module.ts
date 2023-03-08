import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './entities/cat.entity';
import { TypeOrmConfig } from 'src/configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([CatEntity]),
  ],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
