import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadindPageComponent } from './loadind-page/loadind-page.component';

const routes: Routes = [
  {path:"",component:LoadindPageComponent},
  {path:"homeMod",loadChildren:()=>import('./home/home.module').then(mode=>mode.HomeModule)},
  {path:"aboutMod",loadChildren:()=>import('./about-us/about-us.module').then(mode=>mode.AboutUsModule)},
{path:"gallaryMod",loadChildren:()=>import('./gallary/gallary.module').then(mode=>mode.GallaryModule)},
{path:"serviceMod",loadChildren:()=>import('./services/services.module').then(mode=>mode.ServicesModule)},
{path:"projectMod",loadChildren:()=>import('./our-project/our-project.module').then(mode=>mode.OurProjectModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
