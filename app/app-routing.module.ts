import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DoctorSearchComponent } from './doctor-search/doctor-search.component';
const routes: Routes = [ 
  {path:'' , component:LoginComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'sample' , component:SampleComponent},
  {path:'login' , component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
