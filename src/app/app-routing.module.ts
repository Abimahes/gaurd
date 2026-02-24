import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { SignupComponent } from './signup/signup.component';
import { loginGuard } from './login.guard';
import { example2Guard } from './example2.guard';
import { canLoadEx } from './canloadex';

const routes: Routes = [{path:'',component:LoginComponent, },
   {path:"home",loadChildren:()=>import('../app/home/home.module').then(m=>m.HomeModule), canLoad:[canLoadEx]},
  {path:'signup/:id', component:SignupComponent,},
  {path:'dashboard',component:DashboardComponent, canActivate:[loginGuard] ,children:[{path:'employees',component:EmployeesComponent}]},
  {path:'**',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
