import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ServiecesComponent } from './servieces/servieces.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    ServiecesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StructureRoutingModule
  ]
})
export class StructureModule { }
