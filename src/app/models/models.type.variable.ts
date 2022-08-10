export class ProduitDb {
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
export class Produit{ //type of data from my databases
  id!:number;
  nom!:string;
  description!:string;
  prix!:number;
  etat!:number;
  image!:string;
  quantity!:number;
}

export class CatalogueBd{
  menus!:ProduitDb[];
  burgers!:ProduitDb[];
}

export class Compliment{
  frites!:Produit[];
  boissons!:Produit[];
}

export class Zone{

}
