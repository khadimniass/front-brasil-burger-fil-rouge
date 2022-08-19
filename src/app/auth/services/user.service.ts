import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "http://127.0.0.1:8000/api/gestionnaires";

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<any[]>(this.url);
  }
  register(user: User) {
    return this.http.post(this.url, user);
  }
  delete(id: number) {
    return this.http.delete(this.url);
  }
}
