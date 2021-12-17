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
