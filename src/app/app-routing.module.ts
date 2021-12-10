import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
const routes: Routes = [
  {
    path: 'm1',
    component: M1Component,
  },
  {
    path: 'm2',
    component: M2Component,
  },
  { path: '', redirectTo: 'm1', pathMatch: 'full' },
  { path: '**', redirectTo: 'm1' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
