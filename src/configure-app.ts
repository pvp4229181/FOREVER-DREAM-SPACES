import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs from 'hbs';

export function configureApp(app: NestExpressApplication) {
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  app.useStaticAssets(join(process.cwd(), 'public'));
  app.setBaseViewsDir(join(process.cwd(), 'views'));
  // hbs.registerPartials replaces "-" with "_" in partial names by default;
  // keep filenames (e.g. page-hero.hbs) usable as {{> page-hero}}.
  hbs.registerPartials(join(process.cwd(), 'views', 'partials'), {
    rename: (name: string) => name,
  });
  app.setViewEngine('hbs');

  hbs.registerHelper('eq', (a: unknown, b: unknown) => a === b);
  hbs.registerHelper('year', () => new Date().getFullYear());
}
