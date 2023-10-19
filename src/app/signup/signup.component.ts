import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  @Input() hero: any;
  @Output() updatedatachild=new EventEmitter<string>();
}
