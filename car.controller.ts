/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.model';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() createCarDto: Partial<Car>): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return this.carService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.carService.delete(id);
  }
}
