import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './entities/card.entity';
import { CARDS_MOCK } from './entities/mock-cards';

@Injectable()
export class CardsService {
  private cards: Array<Card> = [...CARDS_MOCK];

  getAll(): Array<Card> {
    return this.cards;
  }

  getById(id: string): Card {
    const card = this.cards.find((card) => card.id === +id);

    if (!card) {
      throw new NotFoundException(`Sorry, card ${id} was not found`);
    }
    return card;
  }

  create(card: any) {
    card.id = Date.now();
    card.validDate = new Date().toLocaleDateString('ES');
    this.cards = [...this.cards, card];
  }

  update(id: string, updateCard: any) {
    //force to throw error with cards null;
    this.cards = null;
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
