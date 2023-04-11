import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { CategoriesComponent } from './modules/general/categories/categories.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ListeCategorieComponent } from './modules/general/liste-categorie/liste-categorie.component';
import { ListeEnfantComponent } from './modules/general/liste-enfant/liste-enfant.component';
import { ConnectionComponent } from './modules/general/connection/connection.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CategoriesComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ListeCategorieComponent,
    ListeEnfantComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
