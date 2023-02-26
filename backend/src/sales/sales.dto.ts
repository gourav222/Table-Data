import {
    IsString,
    MaxLength,
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
import {TRANSACTION_TYPE} from './sales.enum'
export class salesDto{

    @IsString()
    @IsNotEmpty()
    date:Date;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    brand:string;

    @IsString()
    @IsNotEmpty()
    transactionType:TRANSACTION_TYPE;

    @IsNotEmpty()
    @IsNumber()
    totalOrders:Number

    @IsNotEmpty()
    @IsNumber()
    totalOrderValue:Number

    @IsNotEmpty()
    @IsNumber()
    grossMarginPercentage:Number
}