import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesCopComponent } from './services-cop/services-cop.component';

const routes: Routes = [
  {path:"servicesData",component:ServicesCopComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
