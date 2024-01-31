import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComComponent } from './home-com/home-com.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    HomeComComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
