import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote, QuoteServiceResponse} from '../models/quote.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote> {
    return this.http.get<QuoteServiceResponse>('https://quotes.rest/qod?language=en')
      .pipe(
        map(response => response.contents.quotes[0])
      );
  }
}
