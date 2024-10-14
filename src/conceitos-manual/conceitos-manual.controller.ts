import { Controller, Get } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor (private readonly conceitosManualService: ConceitosManualService){}
  @Get()
  home(): string {
    return 'conceitos-manual';
  }

  @Get('solution')
  homeSolution(){
    return this.conceitosManualService.solutionHome();
  }
}
