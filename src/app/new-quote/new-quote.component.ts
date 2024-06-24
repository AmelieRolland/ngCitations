import { Component } from '@angular/core';
import { Quote } from '../entities/entities';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.css'
})
export class NewQuoteComponent {

  newQuote: Quote = {
    id: 0,
    quote: '',
    author: '',
    img: ''
  };

  constructor(private quoteService: QuoteService, private router: Router) { }

  onSubmit() {
    this.newQuote.id = this.quoteService.getAllQuotes().length + 1;
    this.quoteService.addQuote(this.newQuote);
    console.log(this.newQuote);
  }

}
