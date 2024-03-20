import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesCopComponent } from './services-cop/services-cop.component';
import { ArchiectureComponent } from './archiecture/archiecture.component';
import { BuildingComponent } from './building/building.component';
import { ConstructionComponent } from './construction/construction.component';
import { EstimationComponent } from './estimation/estimation.component';

const routes: Routes = [
  {path:"servicesData",component:ServicesCopComponent},
  {path:"archi",component:ArchiectureComponent},
  {path:"Build",component:BuildingComponent},
  {path:"constro",component:ConstructionComponent},
  {path:"estimate",component:EstimationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
