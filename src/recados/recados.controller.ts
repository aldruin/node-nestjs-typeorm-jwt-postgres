import { Controller, Get, Param } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller()
export class RecadosController {
  private readonly(recadosService: RecadosService) {}

  //encontrar recados
  @Get('recados')
  findAll() {
    return 'Essa rota retorna varios recados';
  }

  //encontrar um recado
  @Get('recados/:id')
  findOne(@Param('id') id: number) {
    return `Essa rota retorna o recado ID ${id}`;
  }
}
