import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compliment, Produit} from "../models/models.type.variable";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private readonly urlCatlogue:string ="http://127.0.0.1:8000/api/catalogues";
  private readonly urlProduit:string = "http://127.0.0.1:8000/api/produits";
  private readonly urlComplement:string = "http://127.0.0.1:8000/api/complements";
  private readonly urlZone:string = "http://127.0.0.1:8000/api/zones";
  private readonly urlCommandes:string = "http://127.0.0.1:8000/api/commandes";
  private readonly urlBoissonInMenu:string = "http://127.0.0.1:8000/api/menu_boissons/";
  private readonly urlUsers:string = "http://127.0.0.1:8000/api/users";
  private readonly urlLivreurs:string = "http://127.0.0.1:8000/api/livreurs";
  private readonly urlLivraison:string = "http://127.0.0.1:8000/api/livraisons";

  constructor(private http:HttpClient) { }
  getCatalogueObs():Observable<any>{
    return this.http.get<any>(this.urlCatlogue);
  }
  getProduitById(idProduit:number):Observable<any>{
    return this.http.get<any>(this.urlProduit+"/"+idProduit);
  }
  getComplement():Observable<Compliment>{
    return this.http.get<Compliment>(this.urlComplement);
  }
  getZone():Observable<any>{
    return this.http.get<any>(this.urlZone);
  }
  getBoissonInMenu(id:number){
    return this.http.get<any>(this.urlBoissonInMenu+id);
  }
  setCommande(produit:any, idZone:number){
    this.http.post<any>(this.urlCommandes, {body: produit,"zone": "api/zones/"+idZone}).subscribe();
  }
  setCommandeWithoutZone(body:any){
    this.http.post<any>(this.urlCommandes, {body}).subscribe();
  }

  getCommande(){
    return  this.http.get<any>(this.urlCommandes);
  }

  updateCommande(id:number, body:any,message:string){
    this.http.put(this.urlCommandes+"/"+id, body).subscribe(

    );
    Swal.fire({
      html: message,
      icon:'info',
      timer:3500,
      footer:'copyright@',
      title:'brasil burger'
    });
  }
  updateCommandeandview(commande:any, etat:string,message:string){
    this.http.put(this.urlCommandes+"/"+commande.id, {"etat":etat}).
    subscribe((Nouvellecommande:any)=>{
        commande.etat= Nouvellecommande.etat
    });
    Swal.fire({
      html: message,
      icon:'info',
      timer:3500,
      footer:'copyright@',
      title:'brasil burger'
    });
  }


  updateEtatLivreur(idLivreur:number,body:any){
    this.http.put(this.urlLivreurs+"/"+idLivreur,body).subscribe();
  }
  getCommandeById(id:number):Observable<any>{
    return this.http.get<any>(this.urlCommandes+"/"+id)
  }
  getCommandeUser(idUser:number){
    return this.http.get<any>(this.urlUsers+"/"+idUser);
  }
  getLivreur(){
    return this.http.get<any>(this.urlLivreurs)
  }
  getLivreurById(id:number){
    return this.http.get<any>(this.urlLivreurs+"/"+id);
  }

  getLivraisonById(idLivraison:number){
    return this.http.get<any>(this.urlLivraison+"/"+idLivraison);
  }
setLivraison(commandes:any[], idLivreur:number){
  this.http.post<any>(this.urlLivraison,
    {
      "livreur":"api/livreurs/" + idLivreur,
      "commandes":commandes
    }
  ).subscribe();
  }
}
