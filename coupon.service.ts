/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coupon } from './coupon.model';

@Injectable()
export class CouponService {
  constructor(@InjectModel(Coupon.name) private couponModel: Model<Coupon>) {}

  async createCoupon(couponData: Partial<Coupon>): Promise<Coupon> {
    const newCoupon = new this.couponModel(couponData);
    return newCoupon.save();
  }

  async getAllCoupons(): Promise<Coupon[]> {
    return this.couponModel.find().exec();
  }

  async getCouponByCode(code: string): Promise<Coupon> {
    const coupon = await this.couponModel.findOne({ code }).exec();
    if (!coupon) {
      throw new NotFoundException(`Coupon with code ${code} not found`);
    }
    return coupon;
  }

  async validateCoupon(code: string): Promise<boolean> {
    const coupon = await this.getCouponByCode(code);
    if (!coupon.isActive || (coupon.expiresAt && coupon.expiresAt < new Date())) {
      return false; // Invalid if expired or inactive
    }
    return true;
  }

  async applyCouponToOrder(code: string, orderTotal: number): Promise<number> {
    const coupon = await this.getCouponByCode(code);
    if (!await this.validateCoupon(code)) {
      throw new NotFoundException(`Coupon ${code} is invalid`);
    }

    if (coupon.discountType === 'percentage') {
      return orderTotal - (orderTotal * (coupon.discountValue / 100));
    } else {
      return orderTotal - coupon.discountValue;
    }
  }
}
