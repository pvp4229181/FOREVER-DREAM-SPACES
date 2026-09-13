import type { Request, Response } from 'express';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module.js';
import { configureApp } from '../src/configure-app.js';

let serverPromise: Promise<(req: Request, res: Response) => void> | undefined;

async function createServer() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  configureApp(app);
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: Request, res: Response) {
  serverPromise ??= createServer();
  const server = await serverPromise;
  return server(req, res);
}
