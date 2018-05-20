import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'employees', loadChildren: './employees/employees.module#EmployeesComponent' },
];

@NgModule({  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NameRoutingModule { }

