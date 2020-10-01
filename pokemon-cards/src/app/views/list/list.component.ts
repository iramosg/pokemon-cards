import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/components/card/card.service';
import { Card } from 'src/app/components/card/card/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[]

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.listAll().subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
  }

}
