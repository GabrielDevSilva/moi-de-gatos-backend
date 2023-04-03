import { BreedEntity } from '../breeds/entities/breed.entity';
import { CatEntity } from '../cats/entities/cat.entity';
import { breedEntityListMock } from './breed-entity-list.mock';

export const catEntityListMock = new CatEntity();
catEntityListMock.id = '1a799522-f91b-4ca9-b58a-cee6ce855cfb';
catEntityListMock.name = 'amora';
catEntityListMock.age = 2;
catEntityListMock.createAt = new Date('2023-03-15T00:32:17.542Z');
catEntityListMock.updateAt = new Date('2023-03-18T04:20:53.526Z');
catEntityListMock.breed = breedEntityListMock;

// export const catEntityListMock: CatEntity[] = [{
//   id: '1',
//   name: 'amora',
//   age: 2,
//   createAt: new Date(),
//   updateAt: new Date(),
//   breed:
// }]

// const breedEntityListMock: BreedEntity = {
//   id: '1',
//   breed: 'persa',

// }
