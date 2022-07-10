import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CostumersComponent } from './components/costumers/costumers.component';
import { HttpComponent } from './components/http/http.component';
import { CostumersNewComponent } from './components/costumers-new/costumers-new.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignOutDirective } from './directives/sign-out.directive';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { CustomersFilterPipe } from './pipes/customers-filter.pipe';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ContactsComponent,
    FooterComponent,
    PageHeaderComponent,
    PageNotFoundComponent,
    CostumersComponent,
    HttpComponent,
    CostumersNewComponent,
    CustomersDetailsComponent,
    CustomersEditComponent,
    LoginComponent,
    DashboardComponent,
    SignOutDirective,
    SignWithGoogleDirective,
    CustomersFilterPipe,
    ContactsFilterPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
