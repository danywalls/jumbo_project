import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './entities/card.entity';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardService: CardsService) {}
  @Get()
  welcome() {
    return 'Cards Empty';
  }

  @Get('list')
  getAll(): Array<Card> {
    return this.cardService.getAll();
  }

  @Get('list/:id')
  getById(@Param('id') id: string) {
    console.log(id);
    this.cardService.getById(id);
  }

  @Get('generate/:name')
  generateCard(@Param('name') name: string) {
    return {
      id: 2,
      code: '12334',
      validDate: new Date().toLocaleDateString('ES'),
      name,
    };
  }

  @Post('subscribe')
  @HttpCode(HttpStatus.OK)
  subscribe(@Body() body) {
    this.cardService.create(body);
  }

  @Patch('subscribe/:id')
  update(@Param('id') id: string, @Body() body) {
    this.cardService.update(id, body);
  }

  @Delete('subscribe/:id')
  delete(@Param('id') id: string) {
    this.cardService.delete(id);
  }
}
