import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable({ providedIn: 'root' })
export class CardsService {
  #http = inject(HttpClient);
  #API = 'http://localhost:3000/cards';

  cards = toSignal<any>(this.#http.get<[]>(`${this.#API}/list`));
  randomCard = signal<unknown>(undefined);

  generate(name: string) {
    this.#http.post<any>(`${this.#API}/subscribe/`, {
      name
    }).subscribe((response: unknown) => {
      this.randomCard.set(response)
    })
  }
}
