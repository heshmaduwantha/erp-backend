import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { Customer } from "./customer/customer.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    // TypeOrmModule.forRoot({
    //     type: "postgres",
    //     host: process.env.DB_HOST,
    //     port: +process.env.DB_PORT,
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     entities: [Movie, Social, Role, Genre],
    //     synchronize: true,
    //     logging: false,
    //     ssl: {
    //         rejectUnauthorized: true
    //     }
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.40.168',
      port: +'5432',
      username: 'postgres',
      password: '123',
      database: 'erp_db',
      entities: [Customer],
      synchronize: true,
      logging: false,
    }),
    CustomerModule,
  ],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {
}
