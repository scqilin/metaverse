import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DaysRoutingModule } from './days-rounting.module';
import { DaysComponent } from './days.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';
import { M4Component } from './m4/m4.component';
import { M5Component } from './m5/m5.component';

@NgModule({
  declarations: [
    DaysComponent,
    M1Component,
    M2Component,
    M3Component,
    M4Component,
    M5Component
  ],
  imports: [
    MatButtonModule,
    DaysRoutingModule,
    CommonModule,
  ]
})
export class DaysModule { }
