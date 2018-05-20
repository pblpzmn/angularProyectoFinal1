import { DialogComponent } from './../shared/dialog/dialog.component';

import { SharedComponent } from './../shared/shared/shared.component';
import { AuthenticationGuard } from './../authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
  ],
  declarations: [EmployeesComponent],
  providers: [AuthenticationGuard],
  entryComponents: [DialogComponent]
})
export class EmployeesModule { }
