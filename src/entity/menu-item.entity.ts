// src/entity/menu-item.entity.ts

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Menu } from './menu.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ nullable: true })
  icon?: string;

  @Column({ default: false })
  disabled?: boolean;

  @ManyToOne(() => Menu, (menu) => menu.items)
  menu: Menu;
}
