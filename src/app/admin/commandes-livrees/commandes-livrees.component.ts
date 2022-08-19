import {Component, Input, OnInit} from '@angular/core';
import {BackService} from "../../services/back.bd.service";
import {LivraisonService} from "../services/livraison.service";

@Component({
  selector: 'app-commandes-livrees',
  templateUrl: './commandes-livrees.component.html',
  styleUrls: ['./commandes-livrees.component.css']
})
export class CommandesLivreesComponent implements OnInit {
  idLivreur:number=0;
  @Input() livraisonsLivreur:any;
  constructor(private serviceBack:BackService,
              private serviceLiv:LivraisonService
  ) { }
  liveurs:any[]=[];
  ngOnInit(): void {
    this.serviceBack.getLivreur().subscribe(livreur=>{
      this.liveurs = livreur;
    })
  }
}
