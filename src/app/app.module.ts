import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child22Component } from './child22.component';
import { Child222Component } from './child222.component';
import { Child3Component } from './child3.component';
import { Child33Component } from './child33.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child22Component,
    Child222Component,
    Child3Component,
    Child33Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
