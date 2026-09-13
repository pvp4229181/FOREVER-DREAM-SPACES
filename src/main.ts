import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import hbs from 'hbs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // hbs.registerPartials replaces "-" with "_" in partial names by default;
  // keep filenames (e.g. page-hero.hbs) usable as {{> page-hero}}.
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'), {
    rename: (name: string) => name,
  });
  app.setViewEngine('hbs');

  // Small helpers used across templates
  hbs.registerHelper('eq', (a: unknown, b: unknown) => a === b);
  hbs.registerHelper('year', () => new Date().getFullYear());

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Forever Dream Spaces running on http://localhost:${port}`);
}
bootstrap();
