import { Component, OnInit } from '@angular/core';
import {ServicePanierService} from "../services/service-panier.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private servicePanier:ServicePanierService) { }
  item$=this.servicePanier.items$;
  ngOnInit(): void {
  }

}
