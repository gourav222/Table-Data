import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SALES_MODEL } from '../Schemas/sales/sales.schema';
import { salesDto } from './sales.dto';

@Injectable()
export class SalesService {
  constructor(@InjectModel(SALES_MODEL) private readonly salesModel) {}

  async create(salesDto: salesDto) {
    try {
      const sales = await this.salesModel.create(salesDto);
      return sales;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }

  async findAll() {
    const getAllDailySalesDetails = await this.salesModel.find();

    if (!getAllDailySalesDetails) throw new NotFoundException('Data not found');

    return getAllDailySalesDetails;
  }

  async deleteElementById(id) {
    try {
      const salesData = await this.salesModel.findById(id);
      await salesData.remove();
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }
}
