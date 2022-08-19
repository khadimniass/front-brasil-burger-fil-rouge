import { Component, OnInit } from '@angular/core';
import {ServicePanierService} from "../services/service-panier.service";
import {ServiceService} from "../services/service.service";
import {Produit} from "../models/models.type.variable";
import {BackService} from "../services/back.bd.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  prix=this.servicepanier.prixPanier;
  prixTotal = this.servicepanier.getPrixPanier();
  propertybtnlivre:string="d-none";
  showzone:string="d-none";
  btnvalideCommande:string="d-none";
  propertybtnblock:string="";
  zones!:any;
  idZone:number=0;
  produit:any[]=[]
  constructor(private servicepanier:ServicePanierService,
              private service:ServiceService,
              private servicebd:BackService,
              private router:Router,
  ){}
  item$ = this.servicepanier.items$;
    ngOnInit(): void {
      this.servicebd.getZone().subscribe(data=>{
        this.zones=data;
      });
    }
  recupIdZone(input:any){
    //console.log(+zone.value)
    this.idZone = input.value
  }
  afficherImage(img:string){
      return this.service.demanderAffichageImage(img);
  }
  delete(element:Produit){
      this.servicepanier.deleter(element);
  }
  calculPrix(produit:Produit,q:any){
    return this.servicepanier.counter(produit,q);
  }
  livrer() {
    this.propertybtnblock = "d-none"
    this.showzone="d-block"
  }
  payerSurPlace(){
    this.propertybtnblock = "d-none"
    this.propertybtnlivre="d-block"
  }
  monalert(message:string){
      Swal.fire({
      title:'validation du panier',
      icon:'success',
      html:message,
      timer:2500,
      footer:'bye bye brasile burger 👋 👋 👋'
    });
    }
  recuperersuplace(){
   this.servicebd.setCommandeWithoutZone(this.produit);
   this.monalert('votre commande sera servi bientôt sur place...');
  // this.router.navigateByUrl("");
  // this.servicepanier.viderPanier();
  }
  recuperersuplivraison(){
    this.item$.subscribe(pro=>{
       pro.forEach(p=>{
         this.produit.push(
           {
             "quantite": +p.quantity,
             "produit": "api/produits/"+p.id
           })});
      });
      this.servicebd.setCommande(this.produit,+this.idZone);
      this.monalert("votre demande vous sera livré à l\'addresse indiqué...");
      this.router.navigateByUrl("");
      this.servicepanier.viderPanier();
  }
  showbutton(){
    this.btnvalideCommande="d-block"
  }
  PrixTotal(){
    this.prixTotal = this.servicepanier.getPrixPanier();
  }
}
