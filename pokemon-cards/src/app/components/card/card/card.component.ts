import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[]

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.listAll().subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
  }

}
