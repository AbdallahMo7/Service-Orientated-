/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarModel } from './car.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Car', schema: CarModel.schema }],
      'carConnection', // Use the "carConnection" defined in app.module.ts
    ),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
