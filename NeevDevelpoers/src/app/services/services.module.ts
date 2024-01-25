import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesCopComponent } from './services-cop/services-cop.component';


@NgModule({
  declarations: [
    ServicesCopComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
