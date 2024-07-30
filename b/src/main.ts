import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { readFileSync } from 'fs';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});
  app.enableCors();
  await app.listen(9001);
}
bootstrap();
