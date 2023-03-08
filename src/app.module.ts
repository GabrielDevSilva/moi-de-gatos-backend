import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './configs/typeorm.config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), CatsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
