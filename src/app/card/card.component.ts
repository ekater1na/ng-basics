import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{

  title: string = 'My card title'
  text: string = 'My text. La-la-la'

  ngOnInit() {
  }
    getInfo() {
    return 'This is info'
  }

  changeTitle() {
    this.title = 'Title has been changed'
  }
}