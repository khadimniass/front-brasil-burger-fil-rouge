import {Component, Input, OnInit} from '@angular/core';
import {BackService} from "../../../services/back.bd.service";

@Component({
  selector: 'app-row-commandes',
  templateUrl: './row-commandes.component.html',
  styleUrls: ['./row-commandes.component.css']
})
export class RowCommandesComponent implements OnInit {

  commandes:any[]=[];
  @Input() rowCommande!:any;
  constructor(private serviceBack:BackService) { }

  ngOnInit(): void {
    this.serviceBack.getCommande().subscribe(com =>{
      this.commandes=com;
      console.log(com)
    })
  }

}
