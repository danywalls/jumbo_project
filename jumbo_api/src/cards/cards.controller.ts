import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('cards')
export class CardsController {
  @Get()
  welcome() {
    return 'Cards Empty';
  }

  @Get('list')
  getAll() {
    return [
      {
        id: 1,
        code: '123546',
        validDate: new Date().toLocaleDateString('ES'),
      },
      {
        id: 2,
        code: '123547',
        validDate: new Date().toLocaleDateString('ES'),
      },
    ];
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
    return {
      ...body,
      active: true,
      id: Math.random(),
    };
  }
}
