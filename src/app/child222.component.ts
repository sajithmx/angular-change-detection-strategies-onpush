import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child222',
  template: `
    Child 222
    <button (click)="onClick()">Child 222</button>
  `,
  styles: [``],
})
export class Child222Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 222 - ngDoCheck');
  }

  onClick() {
    console.log('\n');
    console.log('Child 222 - onClick');
  }
}
