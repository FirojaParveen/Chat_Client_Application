import {Component } from '@angular/core';
import { Friend } from '../model/friend.model';
import { HttpService } from '../home/http.service';
import {Router} from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'chat',
  styleUrls: ['./chat.component.css'],
  templateUrl: './chat.component.html'
})
export class ChatComponent   {
  
   constructor(private router: Router  )
   {

   }
 
}