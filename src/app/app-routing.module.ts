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
  {
    path: 'years',
    loadChildren:()=>import('./years/years.module').then(m=>m.YearsModule)
  },
  { path: '', redirectTo: 'years', pathMatch: 'full' },
  { path: '**', redirectTo: 'years' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
