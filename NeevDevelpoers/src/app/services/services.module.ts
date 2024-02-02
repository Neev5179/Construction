import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesCopComponent } from './services-cop/services-cop.component';
import { ShareModule } from '../share/share.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ServicesCopComponent,
    FooterComponent
  
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
   
   ShareModule
  ]
})
export class ServicesModule { }
