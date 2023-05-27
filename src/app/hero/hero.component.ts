import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

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

  constructor() {
    console.log('This is constructor');
    
  }

  ngOnInit(): void {
      console.log('This is ngOnInit');
      
  }

  ngOnDestroy(): void {
      console.log('This is ngOnDestroy');
      
  }

}
