import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesCopComponent } from './services-cop/services-cop.component';
import { ShareModule } from '../share/share.module';
import { FooterComponent } from './footer/footer.component';
import { EstimationComponent } from './estimation/estimation.component';
import { BuildingComponent } from './building/building.component';
import { ConstructionComponent } from './construction/construction.component';
import { ArchiectureComponent } from './archiecture/archiecture.component';


@NgModule({
  declarations: [
    ServicesCopComponent,
    FooterComponent,
    EstimationComponent,
    BuildingComponent,
    ConstructionComponent,
    ArchiectureComponent
  
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
   
   ShareModule
  ]
})
export class ServicesModule { }
