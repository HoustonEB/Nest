import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AccountService } from './services/account.service';
import { AccountController } from './controllers/account.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    AccountController
  ],
  providers: [
    AppService,
    AccountService
  ],
})
export class AppModule {}
