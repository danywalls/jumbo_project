import { Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  private cards: Array<Card> = [];

  getAll(): Array<Card> {
    return this.cards;
  }

  getById(id: string): Card {
    return this.cards.find((card) => card.id === +id);
  }

  create(card: any) {
    card.id = Date.now();
    card.validDate = new Date().toLocaleDateString('ES');
    this.cards = [...this.cards, card];
  }

  update(id: string, updateCard: any) {
    const indexToUpdate = this.cards.findIndex((card) => card.id === +id);

    if (indexToUpdate >= 0) {
      this.cards[indexToUpdate] = {
        ...this.cards[indexToUpdate],
        ...updateCard,
      };
    }
  }

  delete(id: string) {
    const cardIndex = this.cards.findIndex((c) => c.id === +id);
    if (cardIndex >= 0) {
      this.cards.splice(cardIndex, 1);
    }
  }
}
