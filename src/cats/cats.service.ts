import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './entities/cat.entity';
import { IParams, IParamsName } from './cats.interface';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>,
  ) {}

  async createCat(cat: CreateCatDTO) {
    return await this.catRepository.save(cat);
  }
  async findOne(id: string) {
    return await this.catRepository.findOneBy({ id });
  }
  async findByName({ name, take = 20, skip = 0 }: IParamsName) {
    const [data, count] = await Promise.all([
      this.catRepository.find({
        order: { name: 'ASC' },
        take,
        skip,
        where: {
          name: Like(`%${name}%`),
        },
      }),
      this.catRepository.count({
        where: {
          name: Like(`%${name}%`),
        },
      }),
    ]);
    return {
      data,
      count,
      take,
      skip,
    };
  }

  async findAll({ take = 20, skip = 0, order = 'ASC' }: IParams) {
    const [data, count] = await Promise.all([
      this.catRepository.find({
        order: { name: order },
        take, // take são a quantidade de itens por página
        skip, // skip é o índice do começo dos itens
      }),
      this.catRepository.count(),
    ]);
    return {
      data,
      count,
      take,
      skip,
    };
  }

  async updateCat(id: string, catUpdated: UpdateCatDto) {
    return await this.catRepository.update(id, catUpdated);
  }
  async deleteCat(id: string) {
    return await this.catRepository.delete({ id });
  }
}
