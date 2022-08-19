import { Component, OnInit } from '@angular/core';
import {BackService} from "../../services/back.bd.service";
import Swal from "sweetalert2";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-commandes-client',
  templateUrl: './commandes-client.component.html',
  styleUrls: ['./commandes-client.component.css']
})
export class CommandesClientComponent implements OnInit {
detailClient!:any
  etatCommande:string="";
  shearincommande: string=this.service.formateDateToday();
  constructor(private serviceback:BackService, private service:ServiceService) { }

  ngOnInit(): void {
    this.serviceback.getCommandeUser(4).subscribe(user=>{
      this.detailClient = user
      console.log(user)
    })
  }
  annulerComande(id:number){
    this.serviceback.getCommandeById(id).subscribe(unCommande=>{
      this.etatCommande=unCommande.etat;
    })
    if (this.etatCommande!="valider"){
      this.serviceback.updateCommande(id, { etat : "annuler" },"commande annuler avec success...");
    }else {
      Swal.fire({
        icon:'warning',
        html:'cette commande ne peux plus etre annulée car c\'est déjà validé !!!',
        footer:'brasil berger',
        timer:2500
      })
    }
   // location.reload();
  }

  affectEtat(etat: any) {
    this.shearincommande = etat.value
  }
}
