import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle = true

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'This is card 2', text: 'This is card number 2'},
    {title: 'Last card 3', text: 'This is card number 3'},
    {title: 'Last card 4', text: 'This is card number 4'}    

  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
