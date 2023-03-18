import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BreedsService } from './breed.service';
import { CreateBreedDTO } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private breedService: BreedsService) {}

  @Post()
  async createBreed(@Body() createBreedDTO: CreateBreedDTO) {
    return await this.breedService.createBreed(createBreedDTO);
  }

  @Get('/:id')
  async findOneBreedById(@Param('id') id: string) {
    return await this.breedService.findOneBreedById(id);
  }

  @Get()
  async findAllBreed() {
    return await this.breedService.findAllBreed();
  }

  @Get('breed/:breed')
  async findBreed(
    @Param('breed') breed: string,
    @Query('order') order: string,
  ) {
    return await this.breedService.findBreed({ breed, order });
  }

  @Put(':id')
  async updateBreed(
    @Param('id') id: string,
    @Body() updateBreedDTO: UpdateBreedDto,
  ) {
    const breedUpdated = this.breedService.updateBreed(id, updateBreedDTO);

    return {
      breed: breedUpdated,
      message: 'raça atualizada com sucesso!',
    };
  }

  @Delete(':id')
  async deleteBreed(@Param('id') id: string) {
    await this.breedService.deleteBreed(id);
    return {
      message: 'raça deletado com sucesso!',
    };
  }
}
