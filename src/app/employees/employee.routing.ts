import { ListComponent } from './../employees/list/list.component';
import { EditComponent } from './edit/edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
const routes: Routes = [
  { path: 'employees', loadChildren: './employees/employees.module#EmployeesComponent' },
];*/
const routes: Routes = [{
  path: 'employees', component: EmployeesComponent,
  children: [
    {
      path: 'edit/:id',
      component: EditComponent,
    },
    {
      path: 'add',
      component: EditComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    { path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ],
}];
  
@NgModule({  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }

