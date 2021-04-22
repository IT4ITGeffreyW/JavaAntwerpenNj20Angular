import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../core/services/quote.service';
import {Quote} from '../core/models/quote.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  quote: Quote;

  constructor(private quoteService: QuoteService) {
    quoteService.getQuote()
      .subscribe(
        {
          next: quote => this.quote = quote,
          error: err => console.error(err)
        }
      );
  }

  ngOnInit(): void {
  }

}
