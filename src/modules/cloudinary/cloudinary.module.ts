// src/cloudinary/cloudinary.module.ts
import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryController } from './cloudinary.controller';

@Module({
  imports: [ConfigModule],
  providers: [CloudinaryProvider, CloudinaryService],
  controllers: [CloudinaryController],
  exports: [CloudinaryService, CloudinaryProvider],
})
export class CloudinaryModule {}
