import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BreedEntity } from '../breeds/entities/breed.entity';
import { breedEntityListMock } from '../testing/breed-entity-list.mock';
import { catEntityListMock } from '../testing/cat-entity-list.mock';
import { catRepositoryMock } from '../testing/cat-repository.mock';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/create-cat.dto';
import { CatEntity } from './entities/cat.entity';

describe('CatService', () => {
  let catService: CatService;
  let catRepository: Repository<CatEntity>;
  let breedRepository: Repository<BreedEntity>;
  // let catController: CatController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [
        CatService,
        catRepositoryMock,
        {
          provide: getRepositoryToken(CatEntity),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(BreedEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    catService = app.get<CatService>(CatService);
    catRepository = app.get<Repository<CatEntity>>(
      getRepositoryToken(CatEntity),
    );
    breedRepository = app.get<Repository<BreedEntity>>(
      getRepositoryToken(BreedEntity),
    );
    // catController = app.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(catService).toBeDefined();
  });

  describe('Create', () => {
    it('METHOD: createCat', async () => {
      const data: CreateCatDTO = {
        name: 'amora',
        age: 2,
        breed: { id: 'de6aecfc-cac1-4d6c-9cb5-7e4ec99b13a8' },
      };

      const result = await catService.createCat(data);
      expect(result).toEqual(catEntityListMock);
    });
  });
  describe('Read', () => {
    it('METHOD findAll', async () => {
      jest
        .spyOn(catService, 'findOne')
        .mockResolvedValueOnce(catEntityListMock);

      const result = await catService.findOne(catEntityListMock.id);
      expect(result).toEqual({
        ...catEntityListMock,
        cats: [breedEntityListMock],
      });
    });
  });
  describe('Update', () => {
    it('', async () => {});
  });
  describe('Delete', () => {
    it('', async () => {});
  });
});
