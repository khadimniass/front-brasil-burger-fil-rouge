import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-commandes',
  //templateUrl: './admin-commandes.component.html',
  styleUrls: ['./admin-commandes.component.css'],
  template:`
    <div class="text-center mt-5 p-5">
      <marquee behavior="" direction="">
        <h1>bienvenu dans la page d'administration</h1>
      </marquee>
        <a href="admin/livraisons" class="btn btn-info btn-hover mt-2 p-3 fs-2 m-3">livraison</a>
        <a href="admin/livraisons/retour" class="btn btn-success mt-2 p-3 fs-2 m-3">Retour des livreur</a>
        <a href="admin/produits/new" class="btn btn-success mt-2 p-3 m-3 fs-2">nouveau produit</a>
      <p class="fs-1 mt-5 mb-0 h3">si tu n'est pas y invité veillez vous rendre dans <a href="/">la page d'accueil</a></p>
    </div>
  `
})
export class AdminCommandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
