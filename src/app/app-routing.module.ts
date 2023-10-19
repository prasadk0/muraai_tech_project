import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerspageComponent } from './careerspage/careerspage.component';
import { ProductsComponent } from './app/products/products.component';
import { FlexlayoutdemoComponent } from './flexlayoutdemo/flexlayoutdemo.component';

const routes: Routes = [   { path: 'login', component:LoginComponent  },
{ path: 'signup', component:SignupComponent  },
{ path: 'careers', component:CareerspageComponent  },
{ path: 'products', component:ProductsComponent  },
{ path: 'about', component:FlexlayoutdemoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
