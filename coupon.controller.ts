/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './coupon.model';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post('create')
  async createCoupon(@Body() couponData: Partial<Coupon>): Promise<Coupon> {
    return this.couponService.createCoupon(couponData);
  }

  @Get()
  async getAllCoupons(): Promise<Coupon[]> {
    return this.couponService.getAllCoupons();
  }

  @Get('validate/:code')
  async validateCoupon(@Param('code') code: string): Promise<boolean> {
    return this.couponService.validateCoupon(code);
  }

  @Post('apply/:code')
  async applyCouponToOrder(
    @Param('code') code: string,
    @Body('orderTotal') orderTotal: number,
  ): Promise<number> {
    return this.couponService.applyCouponToOrder(code, orderTotal);
  }
}
