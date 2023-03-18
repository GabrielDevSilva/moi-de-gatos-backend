import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
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

  async createBreed(breed: CreateBreedDTO) {
    try {
      return await this.breedsRepository.save(breed);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async findOneBreedById(id: string) {
    try {
      return await this.breedsRepository.findOneBy({ id });
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async findBreed({ breed, order }: IParamsBreed) {
    try {
      return this.breedsRepository.find({
        order: { breed: 'ASC' },
        where: {
          breed: ILike(`${breed}%`),
        },
      });
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async findAllBreed() {
    try {
      return await this.breedsRepository.find();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async updateBreed(id: string, breedUpdated: UpdateBreedDto) {
    try {
      return await this.breedsRepository.update(id, breedUpdated);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async deleteBreed(id: string) {
    try {
      return await this.breedsRepository.delete(id);
    } catch (error) {
      console.log((error as Error).message);
    }
  }
}
