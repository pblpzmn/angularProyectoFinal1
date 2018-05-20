import { DialogComponent } from './../../shared/dialog/dialog.component';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  tableColumnsToDisplay = ['id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'edit' ,'delete'];
  constructor(private http: HttpClient, public dialog: MatDialog) { 
    console.log('EmployeesComponent');
    http.get<Employee[]>('api/employees').subscribe( data => {this.employees = data;});
  }

  ngOnInit() {
  }
  delete(id){
    this.employees = this.employees.filter(x => x.id !== id );
    console.log('delete');
    console.log(id);
  
  }

  openDialog(action, id): void {
    console.log(action);
    console.log(id);
    let employee: Employee;
    if (action==='add'){
      employee = {
        id : 5,
        name : '',
        birthday : new Date('05/22/1969'),
        age : 35,
        project : '',
        company : '',
        favoriteColor: ''
      }
    } else {
      employee = this.employees.filter(x => x.id === id)[0];
    }
    
    console.log(employee);
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { action: action, employee: employee}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (action === 'edit') {
        this.employees[id - 1] = result.data.employee;
        //http.get<Employee[]>('api/employees').subscribe( data => {this.employees = data;});
        this.http.post('api/employees', result.data.employee).subscribe();
      }  
      if (action === 'add') {
        this.employees.push(result.data.employee);
      }
    });
  }
}
