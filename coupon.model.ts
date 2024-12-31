/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coupon extends Document {
  @Prop({ required: true, unique: true }) // Unique discount code
  code: string;

  @Prop({ required: true }) // Percentage or fixed discount
  discountType: 'percentage' | 'fixed';

  @Prop({ required: true }) // Discount amount
  discountValue: number;

  @Prop({ default: Date.now }) // Creation date
  createdAt: Date;

  @Prop() // Expiration date
  expiresAt: Date;

  @Prop({ default: true }) // Coupon active or inactive
  isActive: boolean;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
