/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectModel('Car', 'carConnection') // Match model name and connection name
    private readonly carModel: Model<Car>,
  ) {}

  async create(car: Partial<Car>): Promise<Car> {
    const newCar = new this.carModel(car);
    return await newCar.save();
  }

  async findAll(): Promise<Car[]> {
    return await this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    const car = await this.carModel.findById(id).exec();
    if (!car) {
      throw new Error(`Car with ID ${id} not found`);
    }
    return car;
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.carModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new Error(`Car with ID ${id} not found`);
    }
    return { message: `Car with ID ${id} successfully deleted.` };
  }
}
