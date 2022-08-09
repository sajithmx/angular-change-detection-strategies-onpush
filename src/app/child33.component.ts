import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child33',
  template: `
    Child 33
    <button (click)="onClick()">Child 33</button>
  `,
  styles: [``],
})
export class Child33Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 33 - ngDoCheck');
  }

  onClick() {
    console.log('\n');
    console.log('Child 33 - onClick');
  }
}