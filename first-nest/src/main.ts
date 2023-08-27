import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

// Creation New Nest Application Object
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
