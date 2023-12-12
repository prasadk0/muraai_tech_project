import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  table:any=[];
  getTableData(){
    this.http.get('http://localhost:3001/api/getempdetails').subscribe(
      (response: any) => {
       
       console.log(response);
       this.table=response;
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
    return this.faqs;
  }
  id:number=0;
  isAccordionOpen:boolean=false;
  toggleAccordion(){
    this.isAccordionOpen = !this.isAccordionOpen;
    this.empdetails =false;
    // this.isAccordionOpen=false;
    this.displayform=false;
    if(this.isAccordionOpen===false){
      // this.isDivVisible = false;
    }
  }
  faqs:any;
  constructor( private http: HttpClient,private router:Router,private route: ActivatedRoute,private titleService: Title) {}
  updatefaqs(id:number,question:string,value:string,category:string){
    // "/api/update-user/:id"
    // console.log("this is update method start");
    
    const obj = {
      // name:newUser,
      answer:value,
      category:category
    }
    this.http.patch(`http://localhost:3001/api/update-user/${id}`, obj).subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        console.log(response)
        this.getFaqs();
      },
      (error) => {
        console.error('Error adding user', error);
      })
  //  console.log(id,question,value,category);
  //  console.log("this is update method end");
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
        
          if(i.answer===null){
            this.apiDataValue = i.question;
            this.id = i.id;
            // console.log(i.question);
            
            // console.log(i)
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
    return this.faqs;
  }
  apiDataValue="";
  ngOnInit(){
    this.getFaqs();
    this. getTableData();
    // this.getFaqs.subscribe(
    //   (data: any) => {
    //     // Assuming the data structure has a property named 'value'
      
    //   })
  }
  getEmpDetails(){

  }
  jsonData:any=[];
  keys:string="";
  
  sortedData: any[]=[];
  empdetails:boolean=false;
  empShowHide(){
    this.empdetails =! this.empdetails;
    this.isAccordionOpen=false;
    this.displayform=false;
    
  }
  displayform:boolean=false;
  displayFormfun(){
  this.displayform=! this.displayform;
  }
  empTable:boolean=false;
  showEmpDetails(){
    this.empTable = !this.empTable;
    console.log("Show employee details")
  }

  addEmp(firstName:string,role:string,email:string){
    const obj = {
      // name:newUser,
      firstName:firstName,
      role:role,
      email:email
    }
    console.log(name)
    this.http.post('http://localhost:3001/api/add-emp', obj).subscribe(
      (response: any) => {
        // alert('User added successfully.');
        // this.displayUsers();
        // this.userForm.reset();
        console.log(response)
        // this.getFaqs();
      },
      (error) => {
        console.error('Error adding employee', error);
      })
      this.getTableData();
  }
  projectShowHidevar:boolean=false;
  projectShowHide(){
    // projectShowHidevar
    this.projectShowHidevar=! this.projectShowHidevar;
  }



  sortData(sort: Sort) {
    const data = this.jsonData.slice();
    console.log(sort);
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      console.log(this.sortData,'dsts');
      return;
    }
 
    this.sortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'title':
          return compare(a.role, b.role, isAsc);
        case 'price':
          return compare(a.email, b.email, isAsc);
        
        default:
          return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  
  }
  
  }

 
}
