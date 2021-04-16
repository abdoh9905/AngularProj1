import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/cooperative/add-product/add-product.component';
import { CategorieComponent } from './components/footer/categorie/categorie.component';
import { FAQComponent } from './components/footer/faq/faq.component';
import { MentionsLegalesComponent } from './components/footer/mentions-legales/mentions-legales.component';
import { ClientComponent } from './components/header/client/client.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { NouveauteComponent } from './components/header/nouveaute/nouveaute.component';
import { ProduitsComponent } from './components/header/produits/produits.component';
import { VendeurComponent } from './components/header/vendeur/vendeur.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'nouveaute',component:NouveauteComponent},
  {path:'contact',component:ContactComponent},
  {path:'vendeur',component:VendeurComponent},
  {path:'client',component:ClientComponent},
  {path:'categorie',component:CategorieComponent},
  {path:'faq',component:FAQComponent},
  {path:'mentions-légales',component:MentionsLegalesComponent},
  {path:'addproduct',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
