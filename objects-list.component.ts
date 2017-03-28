import {Component,OnInit} from '@angular/core';
import {MyService} from './myservice.service';

@Component({
  selector: 'obj-app',
  template: `<ul *ngFor="let obj of objects">
                <li>{{obj.name}}</li>
             </ul>
  `,
 
    
})
export class ObjComponent implements OnInit {
    objects=[];
   constructor(private _objserice:MyService){}
   ngOnInit(){
       this.objects=this._objserice.getobjects();
   }

}