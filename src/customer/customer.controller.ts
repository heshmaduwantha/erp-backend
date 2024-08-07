import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {

  constructor(
    private service: CustomerService,
  ) {
  }

  @Get('get-all')
  getAll(@Param() id: number): Promise<CustomerDto[]> {
    return this.service.getAll();
  }

  @Post()
  create(@Body() item: CustomerDto, @Req() req: any): Promise<CustomerDto> {
    return this.service.create(item);
  }
}
