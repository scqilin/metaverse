import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsComponent } from './years.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { YearsRoutingModule } from './years-routing.module';
import { Y0Component } from './y0/y0.component';
import { YearsService } from '../services/years.service';
import { Y1Component } from './y1/y1.component';
@NgModule({
  declarations: [
    YearsComponent,
    Y0Component,
    Y1Component,
  ],
  imports: [
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    YearsRoutingModule,
  ],
  providers: [
    YearsService
  ]
})
export class YearsModule { }
