import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/components/card/card.service';
import { Card } from 'src/app/components/card/card/card.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cards: Card[]

  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const { name } = this.route.snapshot.queryParams;
    this.cardService.searchByName(name).subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
  }

}
