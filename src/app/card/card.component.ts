import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit{

  title: string = 'My card title'
  text: string = 'My text. La-la-la'

  disabled = false
  
  imgUrl: string = 'https://icon-library.net/images/github-logo-icon-30_31284.png'

  ngOnInit() {
    setTimeout(()=>{
      this.imgUrl = 'https://www.iconsdb.com/icons/preview/black/skype-xxl.png'
      this.disabled = true
    }, 3000)
    
  }
  getInfo() {
    return 'This is info'
  }
}