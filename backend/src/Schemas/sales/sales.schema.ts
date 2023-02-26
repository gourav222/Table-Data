import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class brand_sales_daily {
  @Prop({ required: true, type: Date, default: Date.now })
  date: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  totalOrders: Number;

  @Prop({ required: true })
  totalOrderValue: Number;

  @Prop({ required: true })
  grossMarginPercentage: Number;

  @Prop({ required: true })
  __v: Number;
}
export const SALES_MODEL = brand_sales_daily.name;
export const SalesSchema = SchemaFactory.createForClass(brand_sales_daily);
