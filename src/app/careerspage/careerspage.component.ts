import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-careerspage',
  templateUrl: './careerspage.component.html',
  styleUrls: ['./careerspage.component.css'],
  animations:[
    trigger('CardTrigger',[
      transition(':enter',[
        style({
          opacity:0,
          transform:'translateX(100%)'
        }),
        animate(300)
      ]),
      transition(':leave',[
        animate(300,style({
          opacity:0,
          tranform:'translateX(-100%)'
        }))
      ])
    ])
  ]
})
export class CareerspageComponent {
  ShowCard:boolean=false;
  jsonData: any;
  username:any=of("");
  numbersObservable = of(1, 2, 3, 4, 5);

  update(_t3: HTMLInputElement) {
    this.username=of(_t3.value);
    this.dataService.userName.subscribe((uname)=> {
      console.log(uname);      
    this.username=of(uname);
    }
    )
    }
  
constructor(private dataService: DataService){
 
}
data="prasad";
key:string="";
updatedata(param:string){
this.data=param;

}
ngOnInit(): void {
  this.dataService.getJsonData().subscribe(data => {
    this.jsonData = data["jobs"];
    console.log(this.jsonData); // Log or use the data as needed
    this.dataService.userName.subscribe((uname)=> {
      console.log(uname);      
    this.username=of(uname);
    })
  });
 


 
  
  




  
  this.numbersObservable.subscribe(
    value => console.log(value),
    //error => console.error(error),
    //() => console.log('Complete')
  );
  this.numbersObservable
  .pipe(
    map(value => value * 2)
  )
  .subscribe(value => console.log(value));
  this.numbersObservable
  .pipe(
    filter(value =>  value%2===0)
  )
  .subscribe(value => console.log(value));
}
filter(key:string){
console.log("hii")
  console.log(key);
  const arr: any[]=[]
  this.dataService.getJsonData().pipe(switchMap(data=> (data["jobs"])
  ),filter((data:any)=> data.title==key)).subscribe( val=> arr.push(val)
  );
  //  this.jsonData["jobs"]=arr; 
  // console.log(this.jsonData);
  console.log(arr);
  
  
   
}

  
}
