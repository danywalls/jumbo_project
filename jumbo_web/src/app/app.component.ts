import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {

  #cardsService = inject(CardsService)
  cards = this.#cardsService.cards;
  generated = this.#cardsService.randomCard;

  generateCard(name: string) {
    this.#cardsService.generate(name);
  }
}
