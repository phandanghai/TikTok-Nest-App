import { Injectable, OnModuleInit } from '@nestjs/common';
import { error } from 'console';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('Database connection is already established.');
    } else {
      return {
        message: 'Database connect failed !!!',
        error: error,
      };
    }
  }
}
