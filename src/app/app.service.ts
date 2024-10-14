import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  solutionExample(){
    return '1+1=2, service';
  }
}
