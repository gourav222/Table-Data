import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { salesDto } from "./sales.dto";
import { SalesService } from "./sales.service";

@Controller()
export class SalesController{
    constructor(private readonly salesService:SalesService){}

    @Post("/api/v1/brand_sales_daily")
    create(@Body() salesDto:salesDto):Promise<salesDto>{
        return this.salesService.create(salesDto);
    }

    @Get("/api/v1/brand_sales_daily")
    getAllSales():Promise<Record<string,any>>{
        return this.salesService.findAll();
    }

    @Delete("/api/v1/brand_sales_daily/:id")
    removeGetBrandSales(@Param('id') id: string){
        return this.salesService.deleteElementById(id);
    }
}