import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CommandeCltComponent } from './pages/commande-clt/commande-clt.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { AddClientComponent } from './pages/page-client/add-client/add-client.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { UpdateClientComponent } from './pages/page-client/update-client/update-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { TaxesComponent } from './pages/taxes/taxes.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
    { path:"dashboard",
    component: DashboardComponent
    },
    {
      path:'clients',
      component: PageClientComponent
    },
    {
      path:'fournisseur',
      component:PageFournisseurComponent
    }
    ,{
      path:'add-client',
      component:AddClientComponent
    },
    {
      path:'updateClient/:id',
      component:UpdateClientComponent
    },
    {
      path:'articles',
      component:PageArticleComponent
    },
    {
      path:'categories',
      component:CategoriesComponent
    },
    {
      path:'taxes',
      component:TaxesComponent
    },
    {
      path:'commandeClt',
      component:CommandeCltComponent
    }
  ]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
