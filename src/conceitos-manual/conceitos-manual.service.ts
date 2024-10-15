import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solutionHome(): string {
    return 'home+ manual concepts';
  }
}
