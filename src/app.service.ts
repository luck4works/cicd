import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '진짜 잘 됩니다!!';
  }
}
