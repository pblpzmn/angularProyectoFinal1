import { EmployeeDialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './../shared/shared/shared.component';
import { AuthenticationGuard } from './../authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [EmployeesComponent, EmployeeDialogComponent],
  providers: [AuthenticationGuard],
  entryComponents: [EmployeeDialogComponent],
  

})
export class EmployeesModule { }
