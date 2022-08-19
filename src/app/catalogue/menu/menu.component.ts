import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServicePanierService} from "../../services/service-panier.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ServiceService} from "../../services/service.service";
import {Produit} from "../../models/models.type.variable";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menus!:Produit;
  constructor(private router:Router,
              private servicePanier:ServicePanierService,
              private sanitizer:DomSanitizer,
              private service:ServiceService,
  ){}

  ngOnInit(): void {
  }
  details(){
    this.router.navigateByUrl(`catalogue/menu/${this.menus.id}`);
  }
  affichageImage(image:string){
    return this.service.demanderAffichageImage(image);
  }
}
