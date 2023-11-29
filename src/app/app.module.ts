import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerspageComponent } from './careerspage/careerspage.component';
// import {Ro}
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import {filterpipe} from "../pipes/transform.pipe"
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './app/products/products.component';
import { SortDirective } from './directive/sort.directive';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ResponsiveComponent } from './responsive/responsive.component';
import { LoaderComponent } from './loader/loader.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './util/app.init';
import { UrlShrinkerComponent } from './url-shrinker/url-shrinker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CareerspageComponent,
    filterpipe,
    ProductsComponent,
    SortDirective,
    ResponsiveComponent,
    LoaderComponent,
    HomePageComponent,
    ContactusComponent,
    UrlShrinkerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSortModule,
    // MatSortModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    KeycloakAngularModule
    
 
  ],
  providers: [
  
    KeycloakService,
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializer, 
      deps: [ KeycloakService ], 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
