// src/order/order.model.ts
import { Schema, Document, model } from 'mongoose';

// Define the Order schema
export interface Order extends Document {
  readonly productName: string;
  readonly quantity: number;
  readonly price: number;
  readonly status: string;
}

export const OrderSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const OrderModel = model<Order>('Order', OrderSchema);