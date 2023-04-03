import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  Delete,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  async createCat(@Body() createCatDTO: CreateCatDTO) {
    return await this.catService.createCat(createCatDTO);
  }

  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    return await this.catService.findOne(id);
  }
  @Get('name/:name')
  async findByName(
    @Param('name') name: string,
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('order') order: string,
  ) {
    return await this.catService.findByName({ name, take, skip, order });
  }

  @Get()
  async findAll(
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('order') order: string,
  ) {
    return await this.catService.findAll({ take, skip, order });
  }

  @Put(':id')
  async updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    const catUpdated = await this.catService.updateCat(id, updateCatDto);

    return {
      cat: catUpdated,
      message: 'gato atualizado com sucesso!!',
    };
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string) {
    await this.catService.deleteCat(id);
    return {
      message: 'gato deletado com sucesso!',
    };
  }
}
