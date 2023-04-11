import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  imageAcceuil = [
    {
    imgUrl: 'assets/image-acceuil/normalise/cover-1.jpg',
    imgTitre: 'Femme',
    AltImage:'Spéciemen pour femme'
  },
  {
    imgUrl: 'assets/image-acceuil/normalise/boubou_bogolan.jpg',
    imgTitre: 'Homme',
    AltImage:'Bogolan pour homme'
  },
  {
    imgUrl: 'assets/image-acceuil/normalise/enfant.jpg',
    imgTitre: 'Enfant',
    AltImage:'Robe pour enfant'
  }
    
  ]

  constructor() { }
}
