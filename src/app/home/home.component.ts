import {Component} from '@angular/core';
import { Friend } from '../model/friend.model';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpService } from '../home/http.service';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent  {
 constructor(private router: Router, private MyServices: HttpService, private route:ActivatedRoute) {
 }
 
    model = new Friend('');
    onSubmit()
  {
  
    if (this.model.userName  == 'firoja')
{
alert("Please input a Value");

}
 else if(this.model.userName.indexOf(' ') > -1)
    {
          alert("Please Check Your Fields For Spaces");
      
    }
else {
console.log(this.model);
this.MyServices.GetPost().subscribe( posts => {console.log(posts) });
this.router.navigate(['/chat']);
}
  }
}