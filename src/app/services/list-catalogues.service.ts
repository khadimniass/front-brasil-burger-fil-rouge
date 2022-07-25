import { Injectable } from '@angular/core';
import {Catalogue, Produit} from "../models/produit";

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
        urlImage:"https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
        price:2000
      },
      {
        id:2,
        nom:"burger 2",
        description:"une description 2",
        urlImage:"https://www.themealdb.com/images/media/meals/1529442316.jpg",
        price:4500
      },
      {
        id:3,
        nom:"burger 3",
        description:"une description 3",
        urlImage:"https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
        price:15000
      },
      {
        id:4,
        nom:"burger 4",
        description:"une description 4",
        urlImage:"https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
        price:1000
      },
      {
        id:5,
        nom:"burger 5",
        description:"une description 5",
        urlImage:"https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
        price:2000
      },
      {
        id:6,
        nom:"burger 6",
        description:"une description 6",
        urlImage:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        price:1200
      },
      {
        id:7,
        nom:"burger 7",
        description:"une description 7",
        urlImage:"https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg",
        price:1200
      }
    ],
    burgers:[
      {
        id:1,
        nom:"menus 1",
        description:"une description menu 1",
        urlImage:"https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
        price:12000
      },
      {
        id:2,
        nom:"menu 2",
        description:"une description menu 2",
        urlImage:"https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
        price:2300
      },
      {
        id:3,
        nom:"menu 3",
        description:"une description menu 3",
        urlImage:"https://img.pixers.pics/pho_wat(s3:700/FO/37/41/83/94/700_FO37418394_c447bba146d5cc241c06648eba18bb1c.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/stickers-hamburger-frites-et-boisson-au-cola.jpg.jpg",
        price:3000
      },
      {
        id:4,
        nom:"menu 4",
        description:"une description menu 4",
        urlImage:"https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
        price:20000
      },
      {
        id:5,
        nom:"menu 5",
        description:"une description menu 5",
        urlImage:"https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
        price:14000
      },
      {
        id:6,
        nom:"menu 6",
        description:"une description menu 6",
        urlImage:"https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
        price:14000
      },
      {
        id:7,
        nom:"menu 7",
        description:"une description menu 7",
        urlImage:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        price:14000
      },
      {
        id:8,
        nom:"menu 8",
        description:"une description menu 8",
        urlImage:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        price:14000
      },
      {
        id:9,
        nom:"menu 9",
        description:"une description menu 9",
        urlImage:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        price:14000
      },
      {
        id:10,
        nom:"menu 10",
        description:"une description menu 10",
        urlImage:"https://www.themealdb.com/images/media/meals/1529445434.jpg",
        price:14000
      },
    ]
  };

  getMenu(): Produit[]{
    return this.catalogue.menus;
  }
  getBurger():Produit[]{
    return this.catalogue.burgers;
  }
  getProdById(idProduit:number):Produit{
  const produit = this.catalogue.menus.find(produi=>produi.id===idProduit);
    if (produit){
      return produit;
    }else {
      throw new Error("product not found");
    }
  }
  getBurgeryId(idProduit:number):Produit{
    const produit = this.catalogue.burgers.find(produi=>produi.id===idProduit);
    if (produit){
      return produit;
    }else {
      throw new Error("product not found");
    }
  }

}
