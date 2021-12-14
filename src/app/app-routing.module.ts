import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'days',
    children: [
      {
        path:"",
        loadChildren:()=>import('./days/days.module').then(m=>m.DaysModule)
      }
    ]
  },
  // {
  //   path: 'm1',
  //   component: M1Component,
  // },
  // {
  //   path: 'm2',
  //   component: M2Component,
  // },
  // {
  //   path: 'm3',
  //   component: M3Component,
  // },
  { path: '', redirectTo: 'days', pathMatch: 'full' },
  { path: '**', redirectTo: 'days' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
