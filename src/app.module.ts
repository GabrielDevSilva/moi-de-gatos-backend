import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cat.module';
import { BreedsModule } from './breeds/breeds.module';
import { TypeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), CatModule, BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
