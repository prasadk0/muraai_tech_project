import { Component, HostBinding } from '@angular/core';
import { routerAnimationState } from './shared/router_animation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations:[routerAnimationState]
})
export class ProductsComponent {
  @HostBinding('RouteAnimationTrigger') routerAnimation=true
  // public dataList:[]=this.jsonData;
  jsonData:any=[];
  key:string=""
  isAccordionOpen: boolean = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  ngOnInit(){
    this.titleService.setTitle('Products-MegaAmaze');

    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
      .then((res)=>res.json()
    )
      .then(json=>{
        if(json){
          this.hideloader();
        }
        this.jsonData=json
      console.log(this.jsonData);
      
      
      })
    },1000)
    
  }
  update(title:any,price:any,desc:any) {
    // console.log(title,price,desc);
 this.jsonData[this.id-1].title=title;
 this.jsonData[this.id-1].price=price;
 this.jsonData[this.id-1].description=desc;
 title="";
 price=""
 desc=""
  
  }
  click(l: any){
    // this.jsonData=l;
    console.log("sorting")
   console.log(l);
  }
  //public dataList:[];
// ngOnChanges(){
//   setTimeout(() => {
//     fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json())
//   .then(json=>{this.jsonData=json
//   console.log(this.jsonData);
//   })
//   }, 10000);
 
// }

 hideloader(): void {
  const loadingElement = document.getElementById('loader');
  const loadingElement1 = document.getElementById('productpage');
  if (loadingElement) {
    loadingElement.style.display = 'none';
   
    
    
  }
  console.log(loadingElement);
  // if(loadingElement1){  loadingElement1.style.display = 'block';}

}
id:any;
getId(id:any){
  // console.log("hiii");
  
  console.log(id);
  this.id=id;
  // return id;
}


deleteItem(){
  console.log("deletion");
  let obj = this.jsonData;
  fetch('https://fakestoreapi.com/products/'+this.id+'',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>{console.log(json['id'])
            // const itemToBeRemoved = {id:2, name:'Dave'}
let k=obj.splice(0,obj.findIndex((a: { id: any; }) => a.id === json.id)-1 )
 let s= obj.splice(obj.findIndex((a: { id: any; }) => a.id === json.id) +1, 6);
for(let i=0;i<s.length;i++){
  k.push(s[i]);
}
 

this.jsonData=k;
  
console.log(obj);
console.log(this.jsonData)
            }
            )
            
}
constructor(private titleService: Title) {}

}

