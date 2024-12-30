/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'User', schema: UserModel.schema }],
      'userConnection',
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
