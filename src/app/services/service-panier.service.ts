import { Injectable } from '@angular/core';
import {BehaviorSubject, map, take} from "rxjs";
import {Produit} from "../models/models.type.variable";
import {ServiceService} from "./service.service";
import {BackService} from "./back.bd.service";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ServicePanierService{
  private itemsSubject = new BehaviorSubject<any[]>([]);
  prixTotal: number = 0;
  prixPanier:number = 0;
  items$ = this.itemsSubject.asObservable();
  constructor(private service:ServiceService,
              private servicebd:BackService) {
    let produitInlocalstorages=JSON.parse(localStorage.getItem('paniers') || '[]');
    if(!produitInlocalstorages){
      produitInlocalstorages = []
    }
    this.itemsSubject.next(produitInlocalstorages);
  }
  ajouter(product: Produit) {
    this.items$.pipe(
      take(1),
      map(products=>{
        if(! this.service.estElementDanTableau(products,product.id)){
          products.unshift(product)
          Swal.fire({
            html:'ajouter au panier...',
            icon:'info',
            timer:1500
          })
        }else {
          products.forEach(ele=>{
            ele.quantity = product.quantity+1;
            Swal.fire({
              html:'ce prosuit existe déja! quantité ajouté',
              icon:'info',
              timer:10000
            })
          })
        }
        localStorage.setItem('paniers',JSON.stringify(products))
      })
    ).subscribe();
  }
  deleter(product: Produit) {
    this.items$.pipe(
      take(1),
      map(products=>{
        if(products.indexOf(product)!=-1)
              products.splice(products.indexOf(product), 1)
        localStorage.setItem('paniers',JSON.stringify(products))
      })
    ).subscribe();
  }
  counter(product: Produit,q:any){
    this.items$.pipe(
      take(1),
      map(products=>{
        products.forEach(ele=>{
          if (ele.id===product.id){
            ele.quantity = q
          }
        })
        localStorage.setItem('paniers',JSON.stringify(products))
      })
    ).subscribe();
  }

  getPrixPanier(){
    let prix:number=0;
    this.items$.subscribe((products)=>{
      products.forEach((product)=>{
        prix+=product.prix * product.quantity;
      });
      localStorage.setItem('paniers',JSON.stringify(products))
    })
  return prix
  }
  viderPanier(){
    // localStorage.removeItem('paniers')
    this.items$.subscribe((products)=>{
      products=[]
      localStorage.setItem('paniers',JSON.stringify(products))
      // products.splice(0,products.length);
    })
  }
}
