import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  constructor(private dataService: DataService){
    this.myForm = new FormGroup({
      // Define form controls with initial values and validation rules
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  username:string="";
  password:string="";
  getdata(a:string,b:string){
    console.log(a+" "+b);
    this.username=a;
    this.dataService.userName.next(this.username);
    console.log("this is call"+this.username);
    
  }
  
  // Create a FormGroup
// myForm: FormGroup;

// Initialize the form group in your component's constructor or ngOnInit

}
