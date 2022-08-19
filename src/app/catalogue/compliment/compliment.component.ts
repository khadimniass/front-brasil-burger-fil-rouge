import { Component, OnInit } from '@angular/core';
import {Produit} from "../../models/models.type.variable";
import {BackService} from "../../services/back.bd.service";

@Component({
  selector: 'app-compliment',
  templateUrl: './compliment.component.html',
  styleUrls: ['./compliment.component.css']
})
export class ComplimentComponent implements OnInit {
  frites!: Produit[];
  boissons!: Produit[];
  constructor(private serviceBack: BackService){}

  ngOnInit(): void {
      this.serviceBack.getComplement().subscribe(compliment => {
      this.boissons = compliment.boissons;
      this.frites = compliment.frites;
    //  console.log(compliment)
    });
  }
}
