import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo se van a pasar las propiedades que esten definidas en el dto
    }),
  ); //Todas las rutas van a tener validacion siempre y cuando tengan un dto
  await app.listen(3000);
}
bootstrap();
