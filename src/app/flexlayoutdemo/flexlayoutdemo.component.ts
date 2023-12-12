import { Component,ViewChild } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';
import {filterpipe} from"../../pipes/transform.pipe"
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

export interface Dessert {
  id: number;
  title: string;
  price: number;
  description: string;
  // protein: number;
}

@Component({
  selector: 'app-flexlayoutdemo',
  templateUrl: './flexlayoutdemo.component.html',
  styleUrls: ['./flexlayoutdemo.component.css'],
  standalone: true,
  imports: [MatSortModule, NgFor,MatPaginatorModule],
})
export class FlexlayoutdemoComponent {
  jsonData:any=[];
  keys:string="";
  
  sortedData: any[];

  // @ViewChild('paginator') paginator=MatPaginator
  // dataSource=MatTableDataSource<any>
  constructor(private titleService: Title) {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{this.jsonData=json
    console.log(this.jsonData);
    this.sortedData=this.jsonData;
    })
    this.sortedData = this.jsonData.slice();
    
    

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
          return compare(a.title, b.titte, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        
        default:
          return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  
  }
  
  }


  // key:string="";
 
  ngOnInit(){
    this.titleService.setTitle('About-MegaAmaze');

  }
}
  
