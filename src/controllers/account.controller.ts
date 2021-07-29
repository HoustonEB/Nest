import { Controller, Get, Render } from '@nestjs/common';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

  @Get('index')
  @Render('account/index')
  getAccountList(): {accountList: string[]} {
    return this.accountService.getAccountList();
  }
}
