import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';*/
import { Http } from '@angular/http';
import { Friend } from '../model/friend.model';
import {HomeComponent} from '../home/home.component';
@Injectable()
export class HttpService {
    constructor(private http: Http)
    {
    }
    GetPost()
    {
        return this.http.get(' https://chat.promactinfo.com/api/login').map(result => result.json());
    }
   /* GetPostAsPerId(id: any)
    {
        https://chat.promactinfo.com/api
         return this.http.get('http://jsonplaceholder.typicode.com/posts'+ id).map(result => result.json());
    }*/
}