import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compliment} from "../models/models.type.variable";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private readonly urlCatlogue:string ="http://127.0.0.1:8000/api/catalogues";
  private readonly urlMenus:string = "http://127.0.0.1:8000/api/menus";
  private readonly urlBurgers:string = "http://127.0.0.1:8000/api/burgers";
  private readonly urlProduit:string = "http://127.0.0.1:8000/api/produits";
  private readonly urlComplement:string = "http://127.0.0.1:8000/api/complements";
  private readonly urlZone:string = "http://127.0.0.1:8000/api/zones";

  constructor(private http:HttpClient) { }
  getCatalogueObs():Observable<any>{
    return this.http.get<any>(this.urlCatlogue);
  }
  getProduitId(idProduit:number):Observable<any>{
    return this.http.get<any>(this.urlProduit+"/"+idProduit);
  }
  getComplement():Observable<Compliment>{
    return this.http.get<Compliment>(this.urlComplement);
  }
  getZone():Observable<any>{
    return this.http.get<any>(this.urlZone);
  }
}
