import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutCopComponent } from './about-cop/about-cop.component';
import { FootercompComponent } from './footercomp/footercomp.component';


@NgModule({
  declarations: [
    AboutCopComponent,
    FootercompComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
