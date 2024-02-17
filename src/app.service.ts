// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// menggunakan Entitiy Menu
import { Menu } from './entity/menu.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async getMenuById(id: number): Promise<Menu> {
    return await this.menuRepository.findOne({
      where: [{ id }],
    });
  }

  async createMenu(menuData: Partial<Menu>): Promise<Menu> {
    const menu = this.menuRepository.create(menuData);
    return await this.menuRepository.save(menu);
  }

  async updateMenu(id: number, menuData: Partial<Menu>): Promise<Menu> {
    await this.menuRepository.update(id, menuData);
    return this.getMenuById(id);
  }

  async deleteMenu(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }

  async getAllMenus(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }
}
