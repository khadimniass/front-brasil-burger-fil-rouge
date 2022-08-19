import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  /**
   * @param ce tableau sert à stocker les livraison d'un livreur
   */
  livraisonsLivreur:any[]=[]
  constructor() {}
}
