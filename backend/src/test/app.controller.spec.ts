import { Test, TestingModule } from '@nestjs/testing';
import { salesDto } from '../sales/sales.dto';
import { SalesController } from '../sales/sales.controller';
import { SalesService } from '../sales/sales.service';
describe('AppController', () => {
  let salesController: SalesController;
  let salesService: SalesService;
  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: SalesService,
      useFactory: () => ({
        create: jest.fn(() => {}),
        findAll: jest.fn(() => []),
        deleteElementById: jest.fn(() => {}),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SalesController],
      providers: [SalesService, ApiServiceProvider],
    }).compile();

    salesController = app.get<SalesController>(SalesController);
    salesService = app.get<SalesService>(SalesService);
  });
  
  it('Calling create brand sales method with non empty response', () => {
    const dto = new salesDto();
    expect(salesController.create(dto)).not.toEqual(null);
  });

  it('Calling create brand sales method with dto', () => {
    const dto = new salesDto();
    salesController.create(dto);
    expect(salesService.create).toHaveBeenCalled();
    expect(salesService.create).toHaveBeenCalledWith(dto);
  });

  it('Calling findAll method', () => {
    salesController.getAllSales();
    expect(salesService.findAll).toHaveBeenCalled();
  });

  it('Calling delete method', () => {
    salesController.removeGetBrandSales('123');
    expect(salesService.deleteElementById).toHaveBeenCalled();
  });

});
