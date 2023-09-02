import { NestFactory } from '@nestjs/core';
import { EventsModule } from './events/events.module';

// Creation New Nest Application Object
async function bootstrap() {
  const app = await NestFactory.create(EventsModule);
  await app.listen(3000);
}

bootstrap();
