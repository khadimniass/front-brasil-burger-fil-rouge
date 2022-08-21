import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BackService} from "../../../services/back.bd.service";

@Component({
  selector: 'app-details-livraison',
  templateUrl: './details-livraison.component.html',
  styleUrls: ['./details-livraison.component.css']
})
export class DetailsLivraisonComponent implements OnInit {
  idLivraison:number=0
  commandes:any[]=[]
  idLivreur:number = 0;
  fullname!:string;
  constructor(private acticeRoute:ActivatedRoute,
              private serviceback:BackService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.idLivraison=this.acticeRoute.snapshot.params['id'];
    this.serviceback.getLivraisonById(this.idLivraison).subscribe(livraison=>{
    //  console.log(livraison.livreur)
      this.idLivreur=livraison.livreur.id
      this.fullname = livraison.livreur.prenom+" "+livraison.livreur.nom
     // console.log("les livraisons : ",livraison)
      livraison.commandes.forEach((com : any)=>{
        this.commandes.unshift(com)
        console.log(com)
      })
    })
    this.libererLuvreur();
  }
  annulerComande(id:number){
    this.serviceback.updateCommande(id, { etat : "annuler" },"commande annuler avec success...");
    this.libererLuvreur()
    //this.serviceback.updateEtatLivreur(this.idLivreur,{"etat":"disponible"});
    this.router.navigateByUrl('admin/livraisons/retour')
  }
  //changer etat du livreur disponible
  terminerComande(id:number){
    this.serviceback.updateCommande(id, { etat : "terminer" },"commande terminer avec success...");
   // this.serviceback.updateEtatLivreur(this.idLivreur ,{"etat":"disponible"});
    this.libererLuvreur()
    this.router.navigateByUrl('admin/livraisons/retour')
  }

  libererLuvreur(){
    (this.serviceback.getLivreurById(this.idLivraison));
    this.serviceback.updateEtatLivreur(this.idLivreur,{"etat":"disponible"});
  }
}
