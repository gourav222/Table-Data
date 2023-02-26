import { Module } from "@nestjs/common";
import { SalesController } from "./sales.controller";
import { SalesService } from "./sales.service";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModelsModule } from "../Schemas/mongoose-models.module";

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
          imports:[ConfigModule],
          useFactory: (configService:ConfigService) => {
              const databaseUri = configService.get("DATABASE_URI");
              return{
                uri:databaseUri
              }
          },
          inject:[ConfigService],
        }),
        MongooseModelsModule,
        SalesModule
      ],
    controllers:[SalesController],
    providers:[SalesService],
    exports:[SalesService],
})
export class SalesModule {}