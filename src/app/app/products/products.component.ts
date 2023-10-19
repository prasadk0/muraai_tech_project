import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  // public dataList:[]=this.jsonData;
  jsonData:any=[];
  key:string=""
  isAccordionOpen: boolean = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{this.jsonData=json
    console.log(this.jsonData);
    
    })
  }
  click(l: any){
   console.log(l);
  }
  //public dataList:[];
ngOnChanges(){
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>{this.jsonData=json
  console.log(this.jsonData);
  })
}


}
