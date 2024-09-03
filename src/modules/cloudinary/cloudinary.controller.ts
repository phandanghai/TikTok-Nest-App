// src/cloudinary/cloudinary.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload')
  async uploadImage(@Body('imageUrl') imageUrl: string) {
    const result = await this.cloudinaryService.uploadImageFromUrl(imageUrl);
    return {
      message: 'Image uploaded successfully!',
      data: result,
    };
  }
}
