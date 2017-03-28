import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyService} from './myservice.service';
import {ObjComponent} from './objects-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ObjComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
