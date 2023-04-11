import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-enfant',
  templateUrl: './liste-enfant.component.html',
  styleUrls: ['./liste-enfant.component.css']
})
export class ListeEnfantComponent {

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
