import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url:string = "http://127.0.0.1:8000/api/login";
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token') || '[]'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
// Net@BM656677?
  login(user:any){
    return this.http.post<any>(this.url,user).subscribe(token=>{
      console.log(JSON.stringify(token))
      localStorage.setItem('token',JSON.stringify(token))
    });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
