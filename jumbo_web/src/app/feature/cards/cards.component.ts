import { Component, OnInit, inject } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import {DatePipe} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
    <div>
      @for (card of $cards(); track $index) {
        <div>
          {{ card.code }} -
          {{ card.valid | date }}
        </div>
      }
    </div>
  `
})

export class CardsComponent  {

  #cardsService = inject(CardsService);

  $cards = this.#cardsService.cards;

}
