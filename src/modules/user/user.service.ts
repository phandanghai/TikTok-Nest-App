import { Get, Injectable, Param, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async getUser(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!user) {
      return {
        message: 'User not found',
        user: null,
      };
    }
    return {
      message: 'Get user successfully',
      user: user,
    };
  }
}
