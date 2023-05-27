import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  title = 'Hero'

  city = [
    'Surabaya',
    'Malang',
    'Kediri'
  ]

  user = {
    name: this.title,
    age: 17,
    address: this.city[2]
  }

}
