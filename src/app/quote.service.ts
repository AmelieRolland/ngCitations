import { Injectable } from '@angular/core';
import { quotes } from './shared/mockQuotes';
import { Quote } from './entities/entities';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes = quotes;
  constructor() { }

  getRandomQuote(): { quote: string, author: string, img: string } {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  addQuote(quote: Quote): void {
    this.quotes.push(quote);
  }

  getAllQuotes(): Quote[] {
    return this.quotes;
  }

  deleteQuote(id: number): void {
    this.quotes = this.quotes.filter(quote => quote.id !== id);
  }

}
