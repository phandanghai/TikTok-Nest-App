import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { CloudinaryProvider } from '../cloudinary/cloudinary.provider';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    CloudinaryProvider,
    CloudinaryService,
  ],
})
export class AuthModule {}
