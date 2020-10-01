import { CardService } from './../../components/card/card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/components/card/card/card.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  card: Card;

  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.getById(id).subscribe(card => {
      this.card = card;
      console.log(this.card)
    });

  }

  return(): void {
    this.router.navigate(['/']);
  }

}
