import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  @Input() hero: any;
  showHide:boolean=true;
  @Output() updatedatachild=new EventEmitter<string>();
}
