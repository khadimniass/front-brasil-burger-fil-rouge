import { Component, OnInit } from '@angular/core';
import {BackService} from "../services/back.bd.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes!:any;
  datesearch: string = this.formateDateToday();
//  datesearch: string = "";
  etatCommande:string="";
  zones:any[]=[];
  constructor(private serviceback:BackService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.serviceback.getCommande().subscribe(com=>{
//      this.commandes=com
      com.forEach((comande:any)=>{
        if (comande.etat=="valider"){
          com.splice(com.indexOf(comande),1)
        }
      })
      this.commandes=com
    })

    this.serviceback.getZone().subscribe(zone=>{
      this.zones=zone;
    })
  }

  validerComande(idCommande:number){
    this.serviceback.getCommandeById(idCommande).subscribe(unCommande=>{
      this.etatCommande=unCommande.etat;
    })
    if (this.etatCommande=="annuler"){
      Swal.fire({
        icon:'warning',
        html:'cette commande ne peux plus etre validée car c\'est déjà annulé par le client !!!',
        footer:'brasil berger',
        timer:2500
      })
    } else{
      this.serviceback.updateCommande(idCommande, { etat : "valider" },"commande validée avec succes...");
      this.router.navigateByUrl("admin/livraisons");
      // vider le panier
    }
  }
  formateDateToday(){
    let date=new Date();
    let day = date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }
 }
