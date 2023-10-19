import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiecesComponent } from './servieces/servieces.component';

const routes: Routes = [
  {path:'landing', component:LandingComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'servieces',component:ServiecesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
