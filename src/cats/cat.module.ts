import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  providers: [CatService],
  controllers: [CatController],
  exports: [CatService],
})
export class CatModule {}
