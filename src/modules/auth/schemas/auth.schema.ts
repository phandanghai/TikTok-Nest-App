import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  fullname: string;

  @Column({ type: 'varchar', length: 255 })
  hashPassword: string;

  @Column({ type: 'varchar', length: 255 })
  avatarUrl: string;

  @Column({ type: 'varchar', length: 255 })
  bio: string;

  @Column()
  isAdmin: boolean;

  @Column()
  isVerified: boolean;

  @Column()
  videos: string[];

  @Column()
  comments: string[];

  @Column()
  likes: string[];

  @Column()
  followers: string[];

  @Column()
  following: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
