import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.once('SIGUSR2', function () {
    process.exit(1);
  });

  await app.listen(3000);
}

bootstrap();
