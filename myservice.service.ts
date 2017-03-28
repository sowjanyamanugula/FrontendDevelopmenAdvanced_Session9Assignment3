import {Injectable} from '@angular/core';

@Injectable()
export class MyService{
    getobjects(){
        return[
            {"id":1,"name":"Sowjanya","role":"SSE"},
            {"id":2,"name":"Sneha","role":"SSE"},
            {"id":3,"name":"Saranya","role":"SSE"},
        ]
    }
}