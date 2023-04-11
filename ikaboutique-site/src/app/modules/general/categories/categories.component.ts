import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    imgUrl:string= 'assets/image-acceuil/normalise/boubou_bogolan.jpg';
    imgTitre:string= 'Femme';
    AltImage: string='Spéciemen pour femme';
/*
  imageAcceuil = [
    {
    imgUrl: 'assets/image-acceuil/normalise/boubou_bogolan.jpg',
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
    
  ]*/
  articlesHommes = [
    {id: 1, category:"homme", type:"chaussure", name:'Superman',price:"12 500",devise:"F cfa"},
    {id: 2, category:"homme", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
    {id: 5, category:"homme", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
    {id: 3, category:"homme", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
    {id: 4, category:"homme", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"},
    {id: 6, category:"homme", type:"chaussure", name:'Mario',price:"12 500",devise:"F cfa"},
    {id: 7, category:"homme", type:"chaussure", name:'Batman',price:"12 500",devise:"F cfa"},
    {id: 8, category:"homme", type:"chaussure", name:'Jeans',price:"12 500",devise:"F cfa"},
    {id: 9, category:"homme", type:"chaussure", name:'Air',price:"12 500",devise:"F cfa"},
    {id: 10, category:"homme", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"}
];

articlesFemmes = [
  {id: 1, category:"femme", type:"chaussure", name:'Supergirl',price:"12 500",devise:"F cfa"},
  {id: 2, category:"femme", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
  {id: 5, category:"femme", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
  {id: 3, category:"femme", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
  {id: 4, category:"femme", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"},
  {id: 6, category:"femme", type:"chaussure", name:'Mario',price:"12 500",devise:"F cfa"},
  {id: 7, category:"femme", type:"chaussure", name:'Batman',price:"12 500",devise:"F cfa"},
  {id: 8, category:"femme", type:"chaussure", name:'Jeans',price:"12 500",devise:"F cfa"},
  {id: 9, category:"femme", type:"chaussure", name:'Air',price:"12 500",devise:"F cfa"},
  {id: 10, category:"femme", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"}
];
articlesEnfants = [
  {id: 1, category:"Enfants", type:"chaussure", name:'Superman',price:"12 500",devise:"F cfa"},
  {id: 2, category:"Enfants", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
  {id: 5, category:"Enfants", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
  {id: 3, category:"Enfants", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
  {id: 4, category:"Enfants", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"},
  {id: 6, category:"Enfants", type:"chaussure", name:'Mario',price:"12 500",devise:"F cfa"},
  {id: 7, category:"Enfants", type:"chaussure", name:'Batman',price:"12 500",devise:"F cfa"},
  {id: 8, category:"Enfants", type:"chaussure", name:'Jeans',price:"12 500",devise:"F cfa"},
  {id: 9, category:"Enfants", type:"chaussure", name:'Air',price:"12 500",devise:"F cfa"},
  {id: 10, category:"Enfants", type:"chaussure", name:'Flash',price:"12 500",devise:"F cfa"}
];

  

}
