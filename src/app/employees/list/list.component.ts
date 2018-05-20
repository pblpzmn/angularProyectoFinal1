import { HttpClient } from '@angular/common/http';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  employees: Employee[];
  tableColumnsToDisplay = ['id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'edit' ,'delete'];
  constructor(private http: HttpClient ) { 
    console.log('ListComponent employee');
    http.get<Employee[]>('api/employees').subscribe( data => {this.employees = data; });
  }
  ngOnInit() {
  }
  delete(id){
    this.employees = this.employees.filter(x => x.id !== id );
    console.log('delete');
    console.log(id);
  
  }
}
