import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  #cardsService = inject(CardsService);
  cards = this.#cardsService.cards;


  generateCard(name: string) {
    this.#cardsService.generate(name);
  }

  deleteCard(id: string) {
    this.#cardsService.delete(id)
   }

  updateCard(id: string) {
    this.#cardsService.update(id, {
      holder: 'Updated From UI'
    })
  }
}
