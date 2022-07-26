import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../models/produit";
import {Router} from "@angular/router";

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  @Input() burgerCatalogue!:Produit;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  details(){
    this.router.navigateByUrl(`catalogue/burger/${this.burgerCatalogue.id}`);
  }
}
