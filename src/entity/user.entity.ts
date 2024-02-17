// user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  email: string;

  @Column()
  umur: number;

  @Column()
  tanggal_lahir: string;

  @Column()
  status: boolean;

  @Column()
  password: string;
}
