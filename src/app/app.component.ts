import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'dasar';
  isChild = false;

  toggleChild = () => {
    this.isChild = !this.isChild;
  }

  ngDoCheck(): void {
      console.log('This is ngDoCheck', this.isChild);
      
  }
}
