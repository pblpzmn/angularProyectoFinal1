import { Employee } from './../../employees/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class EmployeeDialogComponent {
  employee: Employee;
  constructor( public dialogRef: MatDialogRef<EmployeeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.employee = data.employee;
    console.log(this.employee);
   }

   saveData(): void {
    this.dialogRef.close({ data: {employee: this.employee} });
  }
}
