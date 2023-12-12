import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerspageComponent } from './careerspage/careerspage.component';
import { ProductsComponent } from './app/products/products.component';
import { FlexlayoutdemoComponent } from './flexlayoutdemo/flexlayoutdemo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CommentsComponent } from './comments/comments.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [   { path: 'login', component:LoginComponent ,data: { breadcrumb: 'Login' }  },
{ path: 'signup', component:SignupComponent,data: { breadcrumb: 'Signup' }   },
{ path: 'careers', component:CareerspageComponent  ,data: { breadcrumb: 'Career' } },
{ path: 'products', component:ProductsComponent,data: { breadcrumb: 'Products' }   },
{ path: 'about', component:FlexlayoutdemoComponent ,data: { breadcrumb: 'About' }  },
{ path: '', component:HomePageComponent  ,data: { breadcrumb: '' } },
{ path: 'contactus', component:ContactusComponent,data: { breadcrumb: 'Contact Us' }  },
{ path: 'faqs', component:CommentsComponent,data: { breadcrumb: 'Faqs' }  },
{ path: 'admin', component:AdminComponent,data: { breadcrumb: 'Admin' }  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
