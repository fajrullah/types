import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// tambahkan import entity
import { AuthModule } from './auth/auth.module';
import { MenuItem } from './entity/menu-item.entity';
import { Menu } from './entity/menu.entity';
import { User } from './entity/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mypass',
      database: 'sandbox',
      entities: [Menu, MenuItem, User],
      synchronize: true,
    }),
    // tambahkan entity tersebut pada imports
    TypeOrmModule.forFeature([Menu, MenuItem]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
