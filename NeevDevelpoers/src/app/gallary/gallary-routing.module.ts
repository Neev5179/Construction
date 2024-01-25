import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallaryCopComponent } from './gallary-cop/gallary-cop.component';

const routes: Routes = [
  {path:"gallaryData",component:GallaryCopComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallaryRoutingModule { }
