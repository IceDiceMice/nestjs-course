/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ReviewModel extends Base {}
export class ReviewModel {
  @prop()
  name: string;
  @prop()
  title: string;
  @prop()
  description: string;
  @prop()
  rating: number;
  productId: Types.ObjectId;
}
