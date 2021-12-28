import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearsComponent } from './years.component';
import { Y0Component } from './y0/y0.component';
import { Y1Component } from './y1/y1.component';
const routes: Routes = [
  {
    path: '',
    component: YearsComponent,
    children: [
      {
        path: 'y0',
        component: Y0Component
      },
      {
        path: 'y1',
        component: Y1Component
      },
      { path: '', redirectTo: 'y0', pathMatch: 'full' },
      { path: '**', redirectTo: 'y0' },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearsRoutingModule { }
