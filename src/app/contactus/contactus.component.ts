import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  async send(email:any,message:any){
  console.log(email,message);
  emailjs.init('AcPF_VGG-WuUruAQA');
 let res= await emailjs.send("service_lu13nsl","template_1yc8hm2",{
    user_name: "prasad k",
    message: message,
    user_email: email,
    user_subject: "product request!",
    reply_to: "shirish G",
    });
 }
}
