import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
    
    solutionHome(): string {
        return 'home+ automatic concepts';
    }
}
