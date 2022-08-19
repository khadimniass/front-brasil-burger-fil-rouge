import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackService} from "../../services/back.bd.service";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  commande!:any
  constructor(private activeRoute:ActivatedRoute,
              private serviceBack:BackService,
              private service:ServiceService
  ) { }

  ngOnInit(): void {
    const idCommande = +this.activeRoute.snapshot.params['id'];
    this.serviceBack.getCommandeById(idCommande).subscribe(com=>{
        this.commande = com;
      console.log(com)
    })
  }

  affiche(image: string) {
   return  this.service.demanderAffichageImage(image);
  }
}
