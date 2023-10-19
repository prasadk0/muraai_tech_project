import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import {jsondata} from  "../assets/data.json"



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
   }
  getJsonData(): Observable<any> {
    
    return this.http.get('../assets/data.json');
  }
  userName = new BehaviorSubject('');
 
  // loggedInUser():Observable<any>
}
