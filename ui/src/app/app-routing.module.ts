import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ 
  path: 'cruds', 
  loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },

  { path: 'registers', 
  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'crudangulars', 
  loadChildren: () => import('./crudangular/crudangular.module').then(m => m.CrudangularModule) },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
