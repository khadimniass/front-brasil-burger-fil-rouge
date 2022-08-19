import { Injectable } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Produit} from "../models/models.type.variable";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isMenu:boolean=true;
  constructor(private sanitizer:DomSanitizer) { }

  demanderAffichageImage(imageBin: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' +imageBin);
  }

  /**
   *   cet fonction est dans le service et
   *   permet de verifiser si l'element est le localstorage ou pas
    * @param tableau
   * @param idprod
   */
  estElementDanTableau(tableau:Produit[],idprod:number){
    return tableau.find(
      (prod:Produit)=>{
        return prod.id === idprod;
      }
    )
  }
  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }
}
