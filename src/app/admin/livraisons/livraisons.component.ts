import { Component, OnInit } from '@angular/core';
import {BackService} from "../../services/back.bd.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})

export class LivraisonsComponent implements OnInit {
  zones!:any;
  commandes:any[]=[];
  idZone:number=0;
  idLivreur:number=0
  liveurs:any[]=[];
  commandeToPush:string[]=[]
  zonetoSearch:string=this.service.formateDateToday();
  body={
    "livreur": "api/livreurs/11",
    "commandes": [
      "api/commandes/6"
    ]
  };
  idCommande:number[]=[];
  zoneSelected:string="";
  constructor(private serviceBack:BackService,
              private router:Router,
              private service:ServiceService
  ) { }

  ngOnInit(): void {
    this.serviceBack.getZone().subscribe(zone=>{
      this.zones = zone
      // console.log("les zonzs=========>",zone)
    })
    this.serviceBack.getCommande().subscribe(com =>{
       this.commandes = com;
    })
    this.serviceBack.getLivreur().subscribe(livreur=>{
      this.liveurs = livreur;
    })
  }
  recupIdZone(e:any){
    console.log(e.value)
  }

  recupCommande($event:any){
    let lineCommande:string = "api/commandes/"+(+$event.target.id);
    let isCommand=this.commandeToPush.find(com=>{ // est-ce la commande est dans le tableau ?
      return com === lineCommande  //bolean
    })
      if($event.target.checked){
        if (!isCommand){
          this.commandeToPush.push(lineCommande);
        }
      }else {
        if (isCommand){
          this.commandeToPush.splice(this.commandeToPush.indexOf(lineCommande))
        }
      }
  }

  recupLivreur($event: any) {
    this.idLivreur= +$event.target.id;
  }
  validerCommande(){
    if (this.commandeToPush.length== 0){
      Swal.fire({
        html:'Veillez choisir des commandes',
        icon:'warning',
        timer:2500
      });
      return ;
    }else if(this.idLivreur==0){
      Swal.fire({
        html:'Veillez choisir Un livreur',
        icon:'warning',
        timer:2000
      });
      return ;
    }
    this.serviceBack.setLivraison(this.commandeToPush,(+this.idLivreur))
    this.commandeToPush.forEach(comande=>{
      //recupérer id commande
      //console.log(+comande.slice(14))
      //parcourir le tableau de commandeToPush et validé ses commandes ===>this.serviceBack.updateCommande()
      this.serviceBack.updateCommande(+comande.slice(14),{ etat : "livre" },"");
    })
  // changer l'etat du livreur
    this.serviceBack.updateEtatLivreur(this.idLivreur ,{"etat":"indisponible"});
  // confirmation par alert
    Swal.fire({
      html:'Livraison efféctuer avec success...',
      icon:'success',
      timer:3500
    });
    setTimeout(function(){
      window.location.reload();
    }, 3500);
  }
  searchZone(zoneSelected: any) {
    this.zonetoSearch = zoneSelected.nom
  }
  affectEtat(etat:any) {
    this.zonetoSearch = etat.value
  }
}
