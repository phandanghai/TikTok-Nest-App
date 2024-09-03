// src/cloudinary/cloudinary.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

export interface CloudinaryUploader {
  upload: (file: string, options?: Record<string, any>) => Promise<any>;
}

export interface Cloudinary {
  uploader: CloudinaryUploader;
}
@Injectable()
export class CloudinaryService {
  constructor(@Inject('Cloudinary') private cloudinary: Cloudinary) {}

  async uploadImageFromUrl(imageUrl: string) {
    try {
      // Kiểm tra xem cloudinary.uploader có tồn tại hay không
      if (!this.cloudinary.uploader) {
        throw new Error('Cloudinary uploader is not initialized correctly');
      }

      const result = await this.cloudinary.uploader.upload(imageUrl, {
        folder: 'tiktok-images',
      });
      return result.secure_url;
    } catch (error) {
      throw new Error(`Failed to upload image to Cloudinary: ${error.message}`);
    }
  }
}
