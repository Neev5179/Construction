import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCopComponent } from './project-cop/project-cop.component';

const routes: Routes = [
  {path:"projectData",component:ProjectCopComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProjectRoutingModule { }
