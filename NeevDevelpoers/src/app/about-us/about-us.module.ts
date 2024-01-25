import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutCopComponent } from './about-cop/about-cop.component';


@NgModule({
  declarations: [
    AboutCopComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
