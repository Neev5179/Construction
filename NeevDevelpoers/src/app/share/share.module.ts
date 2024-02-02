import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FootercompComponent } from '../about-us/footercomp/footercomp.component';

@NgModule({
  declarations: [
   
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule ,
    MatIconModule,
   
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule ,
    MatIconModule,
   
  ]
})
export class ShareModule { }
