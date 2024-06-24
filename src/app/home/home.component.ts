import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  quote!: { quote: string, author: string, img: string };

  constructor(private quoteService: QuoteService) {}

  generateQuote() {
    this.quote = this.quoteService.getRandomQuote();
  }

}
