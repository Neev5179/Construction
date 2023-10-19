import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLanddingComponent } from './app-landding/app-landding.component';
import { StructureModule } from './structure/structure.module';

const routes: Routes = [
  {path:'', component:AppLanddingComponent},
  {path:'appLand', component:AppLanddingComponent},
  {path:'sturcture', loadChildren:()=>import('./structure/structure.module').then(mode=>mode.StructureModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
