import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCopComponent } from './about-cop/about-cop.component';

const routes: Routes = [
  {path:"aboutData",component:AboutCopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
