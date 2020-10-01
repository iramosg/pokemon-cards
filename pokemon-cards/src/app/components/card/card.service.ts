import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card/card.model';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = "https://api.pokemontcg.io/v1/cards";

  constructor(private http: HttpClient) {

  }

  listAll(): Observable<Card[]> {
    return this.http
    .get<Card[]>(this.baseUrl)
    .pipe(
      map(result => result["cards"])
    );
  }

  getById(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      map(result => result["card"])
    );
  }

  searchByName(name: string): Observable<Card[]> {
    const url = `${this.baseUrl}/?name=${name}`;
    return this.http.get<Card>(url).pipe(
      map(result => result["cards"])
    );
  }
}
