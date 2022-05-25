import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DaysRoutingModule } from './days-routing.module';
import { DaysComponent } from './days.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';
import { M4Component } from './m4/m4.component';
import { M5Component } from './m5/m5.component';
import { M6Component } from './m6/m6.component';
import { M7Component } from './m7/m7.component';

@NgModule({
  declarations: [
    DaysComponent,
    M1Component,
    M2Component,
    M3Component,
    M4Component,
    M5Component,
    M6Component,
    M7Component,
  ],
  imports: [

    DaysRoutingModule,
    CommonModule,
  ]
})
export class DaysModule { }
