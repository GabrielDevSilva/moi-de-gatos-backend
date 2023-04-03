import { getRepositoryToken } from '@nestjs/typeorm';
import { CatEntity } from '../cats/entities/cat.entity';
import { catEntityListMock } from './cat-entity-list.mock';

export const catRepositoryMock = {
  provide: getRepositoryToken(CatEntity),
  useValue: {
    save: jest.fn().mockResolvedValue(catEntityListMock),
    findOneBy: jest.fn(),
    find: jest.fn(),
    count: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
