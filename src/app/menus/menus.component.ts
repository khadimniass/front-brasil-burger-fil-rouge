import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../models/produit"
import {Router} from "@angular/router";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Input() menusCatalogue!:Produit;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  details(){
    this.router.navigateByUrl(`menu/${this.menusCatalogue.id}`);
  }

}
