import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';

@Module({
  imports: [],
  controllers: [AppController, CardsController],
  providers: [AppService, CardsService],
})
export class AppModule {}
