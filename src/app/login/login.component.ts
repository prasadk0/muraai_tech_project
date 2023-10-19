import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataService: DataService){
   
  }
  username:string="";
  password:string="";
  getdata(a:string,b:string){
    console.log(a+" "+b);
    this.username=a;
    this.dataService.userName.next(this.username);
    console.log("this is call"+this.username);
    
  }
}
