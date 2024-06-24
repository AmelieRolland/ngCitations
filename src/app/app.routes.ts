import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteDeleteComponent } from './quote-delete/quote-delete.component';

export const routes: Routes = [
    { path: '', component : HomeComponent },
    { path: 'newquote', component : NewQuoteComponent},
    { path: 'delete', component : QuoteDeleteComponent}
];
