import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { SidebarComponent } from './pages/home/sidebar/sidebar.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule } from "@angular/router";
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { AddClientComponent } from './pages/page-client/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './pages/page-client/update-client/update-client.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TaxesComponent } from './pages/taxes/taxes.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommandeCltComponent } from './pages/commande-clt/commande-clt.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    PageClientComponent,
    PageFournisseurComponent,
    AddClientComponent,
    UpdateClientComponent,
    PageArticleComponent,
    CategoriesComponent,
    TaxesComponent,
    CommandeCltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
