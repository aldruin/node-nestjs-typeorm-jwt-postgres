import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  private readonly(recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return 'Essa rota retorna varios recados';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `Essa rota retorna o recado ID ${id}`;
  }

  @Post()
  create(@Body() body: string){
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any){
    return {
      id,
      ...body,
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number){
    return 'recados apagados';
  }
}
