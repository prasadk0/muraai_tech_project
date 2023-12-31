import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerspageComponent } from './careerspage/careerspage.component';
import { ActivatedRoute } from '@angular/router';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import {filterpipe} from "../pipes/transform.pipe"
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './app/products/products.component';
import { SortDirective } from './directive/sort.directive';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ResponsiveComponent } from './responsive/responsive.component';
import { LoaderComponent } from './loader/loader.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './util/app.init';
import { UrlShrinkerComponent } from './url-shrinker/url-shrinker.component';
import { CommentsComponent } from './comments/comments.component';
import { CustomPipe } from 'src/pipes/replace.pipe';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CareerspageComponent,
    filterpipe,
    CustomPipe,
    ProductsComponent,
    SortDirective,
    ResponsiveComponent,
    LoaderComponent,
    HomePageComponent,
    ContactusComponent,
    UrlShrinkerComponent,
    CommentsComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    // ActivatedRoute,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSortModule,
    // MatSortModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    KeycloakAngularModule,
MatSelectModule

    
 
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
