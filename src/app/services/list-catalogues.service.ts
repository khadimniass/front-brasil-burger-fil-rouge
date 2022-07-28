import { Injectable } from '@angular/core';
import {Catalogue, Produit} from "../models/models.type.variable";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListCataloguesService {
private catalogue:Catalogue={
    menus:[
      {
        id:1,
        nom:"burger 1",
        description:"une description 1",
        image:"https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
        prix:2000,
        etat:1,
        quantity:1,
      },
      {
        id:2,
        nom:"burger 2",
        description:"une description 2",
        prix:4500,
        etat:1,
        quantity:1,
        image:"https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
      },
      {
        id:3,
        nom:"burger 3",
        description:"une description 3",
        image:"https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
        prix:15000,
        etat:1,
        quantity:1,
      },
      {
        id:4,
        nom:"burger 4",
        description:"une description 4",
        image:"https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
        prix:1000,
        etat:1,
        quantity:1,
      },
      {
        id:5,
        nom:"burger 5",
        description:"une description 5",
        image:"https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
        prix:2000,
        etat:1,
        quantity:1,
      },
      {
        id:6,
        nom:"burger 6",
        description:"une description 6",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:1200,
        etat:1,
        quantity:1,
      },
      {
        id:7,
        nom:"burger 7",
        description:"une description 7",
        image:"https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg",
        prix:1200,
        etat:1,
        quantity:1,
      }
    ],
    burgers:[
      {
        id:1,
        nom:"menus 1",
        description:"une description menu 1",
        image:"https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
        prix:12000,
        etat:1,
        quantity:1,
      },
      {
        id:2,
        nom:"menu 2",
        description:"une description menu 2",
        image:"https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
        prix:2300,
        etat:1,
        quantity:1,
      },
      {
        id:3,
        nom:"menu 3",
        description:"une description menu 3",
        image:"https://img.pixers.pics/pho_wat(s3:700/FO/37/41/83/94/700_FO37418394_c447bba146d5cc241c06648eba18bb1c.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/stickers-hamburger-frites-et-boisson-au-cola.jpg.jpg",
        prix:3000,
        etat:1,
        quantity:1,
      },
      {
        id:4,
        nom:"menu 4",
        description:"une description menu 4",
        image:"https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
        prix:20000,
        etat:1,
        quantity:1,
      },
      {
        id:5,
        nom:"menu 5",
        description:"une description menu 5",
        image:"https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:6,
        nom:"menu 6",
        description:"une description menu 6",
        image:"https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:7,
        nom:"menu 7",
        description:"une description menu 7",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:8,
        nom:"menu 8",
        description:"une description menu 8",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:9,
        nom:"menu 9",
        description:"une description menu 9",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:10,
        nom:"menu 10",
        description:"une description menu 10",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:11,
        nom:"menu 11",
        description:"une description menu 10",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },

      {
        id:12,
        nom:"menu 12",
        description:"une description menu 10",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },

      {
        id:13,
        nom:"menu 13",
        description:"une description menu 9",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      },
      {
        id:14,
        nom:"menu 14",
        description:"une description menu 14",
        image:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        prix:14000,
        etat:1,
        quantity:1,
      }
    ]
  };

private cataloguObs:Observable<Catalogue>=from([this.catalogue]);
/*
  getMenuFromCat0bs():Observable<ProduitComponent>{
    return this.cataloguObs.menu.menus
  }
*/
  getMenu(): Produit[]{
    return this.catalogue.menus;
  }
  getBurger():Produit[]{
    return this.catalogue.burgers;
  }
  getProdById(idProduit:number):any{
  const produit = this.catalogue.menus.find(produi=>produi.id===idProduit);
    if (produit){
      return produit;
    }
  }
  getBurgeryId(idProduit:number):any{
    const produit = this.catalogue.burgers.find(produi=>produi.id===idProduit);
    if (produit){
      return produit;
    }
  }

}
