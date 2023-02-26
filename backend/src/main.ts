import { NestFactory } from '@nestjs/core';
import { SalesModule } from './sales/sales.module';
async function bootstrap() {
  const app = await NestFactory.create(SalesModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
