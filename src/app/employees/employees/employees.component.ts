import { Employee } from './../employee';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  nextId;
  employees: Employee[];
  tableColumnsToDisplay = ['id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'edit' ,'delete'];
  constructor() { 
    console.log('EmployeesComponent');

  }

  ngOnInit() {
  }
  /*delete(id){
    this.employees = this.employees.filter(x => x.id !== id );
    console.log('delete');
    console.log(id);
  
  }*/
/*
  openDialog(action, id): void {
    console.log(action);
    console.log(id);
    let employee: Employee;
    if (action === 'add'){
      employee = {
        id : this.nextId,
        name : '',
        birthday : new Date(),
        age : 0,
        project : 0,
        company : '',
        favoriteColor: ''
      };
    } else {
      employee = this.employees.filter(x => x.id === id)[0];
    }
    
    console.log(employee);
    let dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: { action: action, employee: employee}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (action === 'edit') {
        this.employees[id] = result.data.employee;
      }  
      if (action === 'add') {
        console.log("pusshing");
        this.nextId += 1;
        this.employees.push(result.data.employee);
        this.http.post('api/employees', result.data.employee).subscribe(console.log);
      }
      this.changeDetectorRefs.detectChanges();
    });
  }*/
}
