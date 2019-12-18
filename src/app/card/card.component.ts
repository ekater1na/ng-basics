import {Component, OnInit, Input} from '@angular/core'
import {Card} from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{

  @Input() card: Card
  @Input() index: number

  cardDate: Date = new Date()

  title: string = 'My card title'
  text: string = 'My text. La-la-la'
  textColor: string

  ngOnInit() {
  }
    getInfo() {
    return 'This is info'
  }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title);
    
  }
}