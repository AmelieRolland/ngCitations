import { Component } from '@angular/core';
import { Quote } from '../entities/entities';
import { QuoteService } from '../quote.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quote-delete',
  standalone: true,
  imports: [NgFor],
  templateUrl: './quote-delete.component.html',
  styleUrl: './quote-delete.component.css'
})
export class QuoteDeleteComponent {

  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {
    this.quotes = this.quoteService.getAllQuotes();
  }

  deleteQuote(id: number): void {
    this.quoteService.deleteQuote(id);
    this.quotes = this.quoteService.getAllQuotes();
    console.log(this.quotes)
  }

}
