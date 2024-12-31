// src/order/order.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderSchema } from './order.model';  // Import the schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),  // Provide OrderModel
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}