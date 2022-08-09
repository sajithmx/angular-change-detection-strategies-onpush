import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    Child 2
    <button (click)="onClick()">Child 2</button>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 2 - ngDoCheck');
  }

  onClick() {
    console.log('Child 2 - onClick');
  }
}
