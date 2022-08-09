import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
    Child 3
    <button (click)="onClick()">Child 3</button>
  `,
  styles: [``],
})
export class Child3Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 3 - ngDoCheck');
    console.log('\n');
  }

  onClick() {
    console.log('Child 3 - onClick');
  }
}
