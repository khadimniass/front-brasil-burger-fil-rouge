import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../../models/models.type.variable";
import {ActivatedRoute} from "@angular/router";
import {BackService} from "../../../services/back.bd.service";
import {ServiceService} from "../../../services/service.service";
import {ServicePanierService} from "../../../services/service-panier.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
  @Input() produit!:Produit;
  frites!:Produit [];
  boissons!:Produit[];
  menus!:Produit[];
  menu!:any;
  abled!:boolean;
  boissonInMenu!:any;
  sumVal:number=0
  plus:string="d-block";
  moins:string="d-block";
  constructor(private activeRout:ActivatedRoute,
              private servicebd:BackService,
              private activeRoute:ActivatedRoute,
              private service:ServiceService,
              private servicePanier:ServicePanierService
             ){}
  ngOnInit(): void {
    this.abled = false;
    const idProduit = +this.activeRoute.snapshot.params['id'];
    this.servicebd.getProduitById(idProduit).subscribe(prod=>{
      this.menu = prod;
    });

    this.servicebd.getComplement().subscribe(compliment=> {
        this.frites = compliment.frites;
        this.boissons = compliment.boissons;
      })

    this.servicebd.getProduitById(idProduit).subscribe(menu=>{
      if(menu.tailles){
        menu.tailles.forEach((idTaille:any)=>{   //id seulement me suffit
      //    console.log(idTaille)
          this.servicebd.getBoissonInMenu( idTaille.id ).subscribe(boisson=>{
            this.servicebd.getBoissonInMenu(+idTaille.id).subscribe(boisson=>{
              this.boissonInMenu = boisson
            })
          });
        })
      }
    })
    this.servicebd.getCatalogueObs().subscribe(catalogue => {
      this.menus=catalogue.menus
    });

  }
  afficherImage(img:string){
    return this.service.demanderAffichageImage(img);
  }
  ajouterAuPagner(element:Produit) {
    this.servicePanier.ajouter(element);
  }
  countVal(n:number){
    this.sumVal+=n
  }
  incrementVal(){
    console.log("nombre boisson choisi : ",this.sumVal)
      this.sumVal++
    this.moins="d-block"
    if (this.sumVal>=this.boissonInMenu.menuTailles[0].qteBoissondanMenu){
      this.plus = "d-none"
      Swal.fire({
        icon:'error',
        html:'vous avez atteint la quantite autorisée',
        timer:2500
      })

    }
  }
  decrementVal(){
    console.log("nombre boisson",this.sumVal)
    if (this.sumVal>0){
      this.sumVal--
      this.plus = "d-block"
    }else {
      this.moins="d-none"
      Swal.fire({
        icon:'warning',
        html:'quantite autoriser depassée',
        timer:2500
      })
    }
  }
}
