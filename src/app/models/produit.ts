export class Produit {
  id!:number;
  nom!:string;
  description!:string;
  urlImage!:string;
  price!:number;
}
export class Catalogue{
  menus!:Produit[];
  burgers!:Produit[];
}
