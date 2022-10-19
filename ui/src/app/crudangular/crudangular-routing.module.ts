import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudangularComponent } from './crudangular.component';

const routes: Routes = [{ path: '', component: CrudangularComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudangularRoutingModule { }
