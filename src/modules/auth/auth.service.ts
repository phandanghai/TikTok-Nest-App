import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { comparePasswords, hashPassword } from 'src/utils/utils';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const {
      id,
      email,
      password,
      username,
      fullname,
      avatarUrl,
      isAdmin,
      isVerify,
    } = createAuthDto;

    const avatarCloudUrl = avatarUrl
      ? await this.cloudinaryService.uploadImageFromUrl(avatarUrl)
      : null;

    const hashedPassword = password ? await hashPassword(password) : null;
    const user = await this.prismaService.user.create({
      data: {
        id,
        email,
        hashPassword: hashedPassword,
        username,
        fullname,
        avatarUrl: avatarCloudUrl,
        isAdmin: false,
        isVerify: true,
      },
      select: {
        id: true,
        email: true,
        hashPassword: false,
        username: true,
        fullname: true,
        avatarUrl: true,
        isAdmin: true,
        isVerify: true,
      },
    });

    return {
      message: 'Register successfully',
      user: user,
    };
  }
  //login in user email+password
  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Email is not exist!!!');
    }
    const isMatchPassword = await comparePasswords(password, user.hashPassword);
    if (!isMatchPassword) {
      throw new UnauthorizedException('Password is incorrect!!!');
    }
    return {
      message: 'Login successfully',
      user: user,
    };
  }
}
