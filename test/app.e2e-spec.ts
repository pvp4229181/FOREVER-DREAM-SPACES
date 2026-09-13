import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { SiteModule } from './../src/site/site.module.js';

describe('SiteController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SiteModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setBaseViewsDir('views');
    app.setViewEngine('hbs');
    await app.init();
  });

  it('/ (GET) renders the homepage', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        if (!res.text.includes('Forever Dream Spaces')) {
          throw new Error('Homepage did not render expected content');
        }
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
