import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerspageComponent } from './careerspage/careerspage.component';
import { ProductsComponent } from './app/products/products.component';
import { FlexlayoutdemoComponent } from './flexlayoutdemo/flexlayoutdemo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [   { path: 'login', component:LoginComponent  },
{ path: 'signup', component:SignupComponent  },
{ path: 'careers', component:CareerspageComponent  },
{ path: 'products', component:ProductsComponent  },
{ path: 'about', component:FlexlayoutdemoComponent  },
{ path: '', component:HomePageComponent  },
{ path: 'contactus', component:ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
