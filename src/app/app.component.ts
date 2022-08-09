import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngDoCheck() {
    console.log('App - ngDoCheck');
  }

  onClick() {
    console.log('\n');
    console.log('App - onClick');
  }
}
