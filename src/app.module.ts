import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { Photo } from './photo/entities/photo.entity';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'teste',
      entities: [User, Photo],
      synchronize: true,
    }),
    UserModule,
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
