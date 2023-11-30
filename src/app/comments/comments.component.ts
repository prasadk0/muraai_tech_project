import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  isAccordionOpen: boolean = false;
  faqs:any;
dateoption = { year: 'numeric', month: 'long', day: 'numeric' };
  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  removeTimeZone(inputString:string) {
    // Remove "Thu" and "GMT+0530 (India Standard Time)"
    const result = inputString.replace(/^.../, '').replace(/\sGMT\+\d+ \(.+\)/, '');
  
    return result;
  }
  constructor( private http: HttpClient) {}
  getId(id:number){
    console.log(id);
  this.getFqsByid(id);
  // ( <any>this.router).navigate([''], { 
  //   queryParams: {
  //     query: id
  //   }
  // });

  }
  addUser(newUser: any,question:any) {
    console.log(newUser)
    const obj = {
      name:newUser,
      question:question,
      date:String((new Date()))
    }
    this.http.post('http://localhost:3001/api/add-faqs', obj).subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        console.log(response)
        this.getFaqs();
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
  getFaqs(){
    this.http.get('http://localhost:3001/api/get-faqs').subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        console.log(response)
        this.faqs = response;
        // console.l
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
  getFqsByid(id :number){
    this.http.get(`http://localhost:3001/api/get-user-by-id/${id}`).subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        console.log(response)
        this.faqs = response;
        // console.l
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
  ngOnInit(){
    this.getFaqs();
  }
  
}
