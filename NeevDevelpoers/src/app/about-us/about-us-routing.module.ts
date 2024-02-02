import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCopComponent } from './about-cop/about-cop.component';
import { FootercompComponent } from './footercomp/footercomp.component';

const routes: Routes = [
  {path:"aboutData",component:AboutCopComponent},
  {path:"footerData",component:FootercompComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
