import { Component } from '@angular/core';
import {MyService} from './myservice.service';

@Component({
  selector: 'my-app',
  template: `<h2>{{pageTitle}}</h2>
              <obj-app></obj-app>`,
  providers:[MyService]
    
})
export class AppComponent  {
   pageTitle : string = `Session 9 Assignment 3`; 
   userList: any = [
            {name: "Avnesh Shakya",age: "26",  profession:"Employee"},
            {name: "Adam", age: "30", profession: "Employee"},
            {name: "Eve", age: "35", profession: "Employee"},
            {name: "Mohan", age: "25", profession: "Employee"},
            {name: "Sohan", age: "28", profession: "Employee"},
            ]

textcolor="red";
  }



