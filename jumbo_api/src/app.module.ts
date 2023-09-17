import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards/cards.controller';

@Module({
  imports: [],
  controllers: [AppController, CardsController],
  providers: [AppService],
})
export class AppModule {}
