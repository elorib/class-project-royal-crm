import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersComponent } from './components/costumers/costumers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpComponent } from './components/http/http.component';
import { CostumersNewComponent } from './components/costumers-new/costumers-new.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'costumers',
        pathMatch: 'full',
      },
      {
        path: 'costumers',
        component: CostumersComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },

      {
        path: 'costumers/new',
        component: CostumersNewComponent,
      },
      {
        path: 'costumers/:id',
        component: CustomersDetailsComponent,
      },
      {
        path: 'costumers/:id/edit',
        component: CustomersEditComponent,
      },
    ],
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
