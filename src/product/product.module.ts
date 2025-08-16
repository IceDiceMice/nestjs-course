import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModule,
        schemaOptions: {
          collection: 'Product',
        },
      },
    ]),
  ],
})
export class ProductModule {}
