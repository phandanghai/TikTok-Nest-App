import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './modules/database/database.service';
import { UuidModule } from './modules/uuid/uuid.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { CloudinaryService } from './modules/cloudinary/cloudinary.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'haidangphan',
      password: '1234567890',
      database: 'mydatabase',
      entities: [],
      synchronize: true, // Disable in production
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    CloudinaryModule,
    UuidModule,
  ],
  providers: [DatabaseService, CloudinaryService],
})
export class AppModule {}
