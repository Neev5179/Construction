import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComComponent } from './home-com/home-com.component';

const routes: Routes = [
  {path:"homeData",component:HomeComComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
