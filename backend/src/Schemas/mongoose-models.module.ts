import { Module,Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SALES_MODEL,SalesSchema } from "./sales/sales.schema";

const MODELS = [
    {name:SALES_MODEL, schema: SalesSchema}
];

@Global()
@Module({
    imports: [MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule],
})
export class MongooseModelsModule {}