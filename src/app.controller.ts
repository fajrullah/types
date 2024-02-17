// src/app.controller
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Menu } from './entity/menu.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/menus')
  async createMenu(@Body() menuData: Partial<Menu>): Promise<Menu> {
    return await this.appService.createMenu(menuData);
  }

  @Get('/menus/:id')
  async getMenuById(@Param('id') id: number): Promise<Menu> {
    return await this.appService.getMenuById(id);
  }

  @Get('/menus')
  async getAllMenus(): Promise<Menu[]> {
    return await this.appService.getAllMenus();
  }

  @Put('/menus/:id')
  async updateMenu(
    @Param('id') id: number,
    @Body() menuData: Partial<Menu>,
  ): Promise<Menu> {
    return await this.appService.updateMenu(id, menuData);
  }

  @Delete('/menus/:id')
  async deleteMenu(@Param('id') id: number): Promise<void> {
    return await this.appService.deleteMenu(id);
  }
}
