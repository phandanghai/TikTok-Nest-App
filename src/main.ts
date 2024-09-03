import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
    credentials: true, // Allow cookies to be sent across domains
  };

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api', {
    exclude: ['/'],
  });
  await app.listen(3001);
}
bootstrap();
