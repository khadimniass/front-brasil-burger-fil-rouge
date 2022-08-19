import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url:string = "http://127.0.0.1:8000/api/gestionnaires";
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '[]'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  login(email:string,password:string){
    console.log('post, or get ?')
    return this.http.post<any>(this.url,{email,password})
      .pipe(
        map(user=>{
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
}
