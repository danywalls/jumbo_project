import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, combineLatest } from 'rxjs';


export type Card = {
  id: number;
  code: string;
  valid: string;
  holder: string;
};


@Injectable({ providedIn: 'root' })
export class CardsService {
  #http = inject(HttpClient);
  #API = 'http://localhost:3000/cards';

  #subscribe = (id: string) => `${this.#API}/subscribe/${id}`;
  #actionSubject = new Subject<void>();
  cards = toSignal(this.#http.get<Card[]>(`${this.#API}/list`));

  update(id: string, cardUpdate: any) {
    this.#http
      .patch(this.#subscribe(id), cardUpdate)
      .subscribe((p) => console.log('updated'));
  }

  delete(id: string) {
    this.#http
      .delete(this.#subscribe(id))
      .subscribe((p) => console.log('deleted'));
  }

  generate(name: string) {
    this.#http
      .post<any>(`${this.#API}/subscribe/`, {
        name,
      })
      .subscribe((response: unknown) => {
        this.#actionSubject.next();
      });
  }
}
