import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  @Input() UrlImage!: string;
  @Input() imgTitre!:string;
  @Input() AltImage!:string;


  articles = [
    {id: 13, category:"homme", type:"chaussure", name:'Superman',price:"12 500",devise:"F cfa"},
    {id: 2, category:"homme", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
    {id: 5, category:"homme", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
    {id: 3, category:"homme", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
    
    {id: 4, category:"femme", type:"chaussure", name:'Supergirl',price:"12 500",devise:"F cfa"},
    {id: 6, category:"femme", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
    {id: 7, category:"femme", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
    {id: 9, category:"femme", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
    
    {id: 8, category:"Enfants", type:"chaussure", name:'Superman',price:"12 500",devise:"F cfa"},
    {id: 10, category:"Enfants", type:"vêtements", name:'Batman',price:"12 500",devise:"F cfa"},
    {id: 11, category:"Enfants", type:"chaussure", name:'BatGirl',price:"12 500",devise:"F cfa"},
    {id: 12, category:"Enfants", type:"chaussure", name:'Robin',price:"12 500",devise:"F cfa"},
  
];

}
