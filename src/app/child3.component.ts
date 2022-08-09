import { Component, OnInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
    Child 3
    <button (click)="onClick()">Child 3</button>
    --->
    <app-child33></app-child33>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child3Component implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Child 3 - ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('Child 3 - ngAfterViewChecked');
  }

  onClick() {
    console.log('\n');
    console.log('Child 3 - onClick');
  }
}
