import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductModel } from 'src/product/product.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}
  @Delete(':id')
  async delete(@Param('id') id: string) {}
  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
