import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

type randomCard = {
  name: string,
  active: boolean,
  id: number
}
type card = randomCard & {
  validDate: string
  code: number
}

@Injectable({ providedIn: 'root' })
export class CardsService {
  #http = inject(HttpClient);
  #API = 'http://localhost:3000/cards';

  cards = toSignal<card[]>(this.#http.get<[]>(`${this.#API}/list`));
  randomCard = signal<any>(undefined);

  generate(name: string) {
    this.#http.post<card>(`${this.#API}/subscribe/`, {
      name
    }).subscribe((response) => {
      this.randomCard.set(response)
    })
  }
}
