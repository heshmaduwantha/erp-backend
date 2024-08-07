import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../_base/base.dto';

export class CustomerDto extends BaseDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  mobileNumber: number;

  @ApiProperty()
  address: string;

  @ApiProperty()
  nic: string;

  @ApiProperty()
  idCopy: string;

  @ApiProperty()
  remark: string;
}