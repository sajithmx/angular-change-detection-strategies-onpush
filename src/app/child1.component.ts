import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    Child 1
    <button (click)="onClick()">Child 1</button>
  `,
  styles: [``],
})
export class Child1Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 1 - ngDoCheck');
  }

  onClick() {
    console.log('\n');
    console.log('Child 1 - onClick');
  }
}
