import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filterpipe'
})
export class filterpipe implements PipeTransform{
    transform(value: any,searItem:string) {
     return value.filter(function(Item: any){
    return  Item.title.toLowerCase().indexOf(searItem)>=0;

     })
    }

}