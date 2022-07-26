import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../models/produit"
import {Router} from "@angular/router";
import {ListCataloguesService} from "../services/list-catalogues.service";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Input() menusCatalogue!:Produit;
  tabMenuObs:Produit[]=[];
  constructor(private router:Router,private service:ListCataloguesService) { }

  ngOnInit(): void {
    this.service.getMenuObs().subscribe({
      next:(item:Produit)=>{
        this.tabMenuObs.push(item)
      }
    })
  //  console.log(this.tabMenuObs)
  }

  details(){
      this.router.navigateByUrl(`catalogue/menu/${this.menusCatalogue.id}`);
  }
}
