import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BackService} from "../../../services/back.bd.service";
@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  livreur:any
  toutesLeslivraison:any
  idLivreur:number=0;
  commandes:any[]=[];
  constructor(private serviceback:BackService,
              private activeRoute:ActivatedRoute,
              private router:Router,
  ) { }
  ngOnInit(): void {
    this.idLivreur = + this.activeRoute.snapshot.params['id'];
    this.serviceback.getLivreurById(this.idLivreur).subscribe(livreur=>{
      this.livreur=livreur
      this.toutesLeslivraison = livreur.livraisons
    //  console.log(this.toutesLeslivraison)
      this.toutesLeslivraison.forEach((livraison:any)=>{
        //  console.log("nombre de commande à livrées",livraison.commandes.length)
        livraison.commandes.forEach((commandeDansLivraison:any)=>{
          this.commandes.push(commandeDansLivraison)
        //  console.log("COMMANDES DANS LIVRAISON",commandeDansLivraison)
        })
      })
    })
    console.log(this.commandes)
  }
}
