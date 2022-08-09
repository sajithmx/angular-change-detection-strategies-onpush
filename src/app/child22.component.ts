import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child22',
  template: `
    Child 22
    <button (click)="onClick()">Child 22</button>
    --->
    <app-child222></app-child222>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child22Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 22 - ngDoCheck');
  }

  onClick() {
    console.log('\n');
    console.log('Child 22 - onClick');
  }
}
