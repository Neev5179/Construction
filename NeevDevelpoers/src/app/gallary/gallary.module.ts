import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryCopComponent } from './gallary-cop/gallary-cop.component';


@NgModule({
  declarations: [
    GallaryCopComponent
  ],
  imports: [
    CommonModule,
    GallaryRoutingModule
  ]
})
export class GallaryModule { }
