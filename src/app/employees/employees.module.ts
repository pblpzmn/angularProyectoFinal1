import { EmployeeRoutingModule } from './employee.routing';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './../shared/shared/shared.component';
import { AuthenticationGuard } from './../authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule,  } from '@angular/material';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeesComponent, ListComponent, EditComponent],
  exports: [EmployeeRoutingModule]
  
  

})
export class EmployeesModule { }
