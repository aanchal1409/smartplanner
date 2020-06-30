import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TryfirebaseComponent } from './tryfirebase/tryfirebase.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  { path:'signup',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'scheduler',component:SchedulerComponent},
  { path:'tryf',component:TryfirebaseComponent},
  { path:'ftr',component:FooterComponent},
  { path:'home',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
