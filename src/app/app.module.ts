import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProduitsComponent } from './components/header/produits/produits.component';
import { NouveauteComponent } from './components/header/nouveaute/nouveaute.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { VendeurComponent } from './components/header/vendeur/vendeur.component';
import { ClientComponent } from './components/header/client/client.component';
import { CategorieComponent } from './components/footer/categorie/categorie.component';
import { FAQComponent } from './components/footer/faq/faq.component';
import { MentionsLegalesComponent } from './components/footer/mentions-legales/mentions-legales.component';
import { AddProductComponent } from './components/cooperative/add-product/add-product.component';
import { LoginComponent } from './components/header/client/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    NouveauteComponent,
    ContactComponent,
    VendeurComponent,
    ClientComponent,
    CategorieComponent,
    FAQComponent,
    MentionsLegalesComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
