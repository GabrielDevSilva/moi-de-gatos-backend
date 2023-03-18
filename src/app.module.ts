import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './configs/typeorm.config';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), CatsModule, BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
