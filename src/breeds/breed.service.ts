import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateBreedDTO } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { BreedEntity } from './entities/breed.entity';
import { IParamsBreed } from '@Types';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(BreedEntity)
    private breedsRepository: Repository<BreedEntity>,
  ) {}

  async createBreed(createBreedDTO: CreateBreedDTO) {
    if (
      await this.breedsRepository.exist({
        where: {
          breed: createBreedDTO.breed,
        },
      })
    ) {
      throw new BadRequestException('Esta raça já esta cadastrada.');
    }

    return await this.breedsRepository.save(createBreedDTO);
  }

  async findOneBreedById(id: string) {
    return await this.breedsRepository.findOneBy({ id });
  }

  async findBreed({ breed, order }: IParamsBreed) {
    return this.breedsRepository.find({
      order: { breed: 'ASC' },
      where: {
        breed: ILike(`${breed}%`),
      },
    });
  }

  async findAllBreed() {
    return await this.breedsRepository.find();
  }

  async updateBreed(id: string, breedUpdated: UpdateBreedDto) {
    return await this.breedsRepository.update(id, breedUpdated);
  }

  async deleteBreed(id: string) {
    return await this.breedsRepository.delete(id);
  }
}
