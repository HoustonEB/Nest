import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  getAccountList(): {accountList: string[]} {
    return {
        accountList: ['1', '2', '3']
    };
  }
}
