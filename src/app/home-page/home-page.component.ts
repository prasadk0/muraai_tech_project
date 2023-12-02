import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, fromEvent, range, throwError } from 'rxjs';
import { of } from 'rxjs';
import { map, reduce, filter, count, max, min, concat, debounceTime } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private formBuilder:FormBuilder,private titleService: Title){}
  // constructor(private titleService: Title) {}

  ngOnInit(){
    this.searchform=new FormGroup({
      name: new FormControl('start search')

    }
    
    )
    this.titleService.setTitle('Home-MegaAmaze');

    this.searchform.get('name')?.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe(data=>console.log(data)
    )
    of(2,3,4).pipe(map(x=>x*5)).subscribe(data=> console.log(data));
  }
  @ViewChild('validate')
  validate!: ElementRef;
   numberObservable = new Observable(observer => {
    for (let i = 1; i <= 5; i++) {
      observer.next(i);
    }
    observer.complete();
  });
  observer = of(2,3,45);
  
  click1(){
    let test= this.numberObservable.pipe(
     concat(this.observer)
    )
    
    // const result =throwError(new Error('error occurred'));
    let ints = range(1, 10);
    ints.subscribe( value=>{
      console.log(value);
      
    } )
    test.subscribe(
      value => {
        console.log(`Received value: ${value}`);
      },
      error => {
        console.error(`Error: ${error}`);
      },
      () => {
        console.log('Observable completed.');
      }
    );
   
    
  }

  rxjsEvent(){
   const eventobject$ = fromEvent(this.validate?.nativeElement,'click');
   eventobject$.subscribe(data=> console.log(data)
   )
  }
  readValue(){
    console.log("yess");
  }
  searchform!: FormGroup;
  name !:FormControl;
}
