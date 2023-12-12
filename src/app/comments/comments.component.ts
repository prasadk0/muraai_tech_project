import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { Router } from 'express';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  isDivVisible:boolean = false;
  isAccordionOpen: boolean = false;
  faqs:any;
dateoption = { year: 'numeric', month: 'long', day: 'numeric' };
  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
    if(this.isAccordionOpen===false){
      this.isDivVisible = false;
    }
  }
  removeTimeZone(inputString:string) {
    // Remove "Thu" and "GMT+0530 (India Standard Time)"
    const result = inputString.replace(/^.../, '').replace(/\sGMT\+\d+ \(.+\)/, '');
  
    return result;
  }
  constructor( private http: HttpClient,private router:Router,private route: ActivatedRoute,private titleService: Title) {}

 
  toggleDivVisibility() {
    // console.log(id);
    
   
    // this.getId(id)
    this.route.queryParams.subscribe(params => {
      const paramNameValue = params['query'];
      
      // Now you can use paramNameValue in your component logic
      console.log('Query Parameter Value:', params,paramNameValue);
      // if(id==paramNameValue){
        // console.log(id===paramNameValue)
        this.isDivVisible = !this.isDivVisible;
      // }else{
      //   this.isDivVisible = this.isDivVisible;
      // }
    });
    // console.log(id)
  }
  getId(id:number){
    // console.log(id);
  // this.getFqsByid(id);
  ( <any>this.router).navigate(['/faqs'], { 
    queryParams: {
      query: id
    }
    
  });
  // this.toggleDivVisibility()
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
  searching(category:string) {
    // console.log(newUser)
    // const obj = {
    //  category:category
    // }
    this.http.get(`http://localhost:3001/api/get-faqs/${category}`).subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        // console.log(response)
        this.faqs = response;
        // this.getFaqs();
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

        // if(this.faqs.answer==="")
        // this.faqs = response;
        let arr=[]
        for(let i of response){
        
          if(i.answer!==null){
            console.log(i)
            arr.push(i);
          }
        }
        this.faqs=arr;
        console.log("ll",response[0].id)
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
  foods = [
    {value: 'Jobs', viewValue: 'Jobs'},
    {value: 'Services', viewValue: 'Services'},
    {value: 'Products', viewValue: 'Products'}
  ];
  selected :string="";
  categoryBasedSearching(){
    console.log(this.selected)
    this.searching(this.selected)
  }
  ngOnInit(){
    this.getFaqs();
    this.route.queryParams.subscribe(params => {
      const paramNameValue = params['paramName'];
      
      // Now you can use paramNameValue in your component logic
      console.log('Query Parameter Value:', paramNameValue);
    });
    this.titleService.setTitle('Faqs-MegaAmaze');

  }
  
}
