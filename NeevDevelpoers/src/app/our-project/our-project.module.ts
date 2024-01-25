import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProjectRoutingModule } from './our-project-routing.module';
import { ProjectCopComponent } from './project-cop/project-cop.component';


@NgModule({
  declarations: [
    ProjectCopComponent
  ],
  imports: [
    CommonModule,
    OurProjectRoutingModule
  ]
})
export class OurProjectModule { }
