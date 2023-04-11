import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { CategoriesComponent } from './modules/general/categories/categories.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ListeCategorieComponent } from './modules/general/liste-categorie/liste-categorie.component';
import { ListeEnfantComponent } from './modules/general/liste-enfant/liste-enfant.component';
import { ConnectionComponent } from './modules/general/connection/connection.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path:'liste-homme',component:ListeCategorieComponent },
  {path:'liste-enfant',component:ListeEnfantComponent },
  {path: 'categoris', component: CategoriesComponent},
  {path:'connection', component:ConnectionComponent},
  
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
