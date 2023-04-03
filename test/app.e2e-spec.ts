import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let breedTest: string;
  let catTest: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('testing breedController', () => {
    it('Register a new breed', async () => {
      const response = await request(app.getHttpServer())
        .post('/breeds')
        .send({ breed: 'persa' });

      expect(response.statusCode).toEqual(201);
      breedTest = response.body.id;
    });

    it('Register a new breed already registered', async () => {
      const response = await request(app.getHttpServer())
        .post('/breeds')
        .send({ breed: 'persa' });

      expect(response.statusCode).toEqual(400);
    });

    it('Register a new breed without letters', async () => {
      const response = await request(app.getHttpServer())
        .post('/breeds')
        .send({ breed: '' });

      expect(response.statusCode).toEqual(400);
    });
    it('Register a new cat', async () => {
      const response = await request(app.getHttpServer())
        .post('/cats')
        .send({ name: 'meg', age: 3, breed: { id: breedTest } });

      expect(response.statusCode).toEqual(201);
      catTest = response.body.id;
    });
    // it('Register a new cat with empty field', async () => {
    //   const response = await request(app.getHttpServer())
    //     .post('/cats')
    //     .send({ name: '', age: '3', breed: { id: breedTest } });

    //   expect(response.statusCode).toEqual(400);
    // });

    it('Find a cat by name', async () => {
      const response = await request(app.getHttpServer())
        .get('/cats/name/meg?take&skip')
        .send();

      expect(response.statusCode).toEqual(200);
    });

    it('Find all cats', async () => {
      const response = await request(app.getHttpServer())
        .get('/cats?take&skip')
        .send();

      expect(response.statusCode).toEqual(200);
    });

    it('Update some field of cat', async () => {
      const response = await request(app.getHttpServer())
        .put(`/cats/${catTest}`)
        .send({
          name: 'cadu',
          age: 5,
        });

      expect(response.statusCode).toEqual(200);
      expect(response.body.message).toEqual('gato atualizado com sucesso!!');
    });

    it('Delete one cat using your id', async () => {
      const response = await request(app.getHttpServer())
        .del(`/cats/${catTest}`)
        .send();

      expect(response.statusCode).toEqual(200);
    });
  });
});
