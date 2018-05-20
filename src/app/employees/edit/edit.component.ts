import { Employee } from './../employee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee : Employee =  {
    id : Math.floor((Math.random()*60)+1),
    name : ' ',
    birthday : new Date(),
    age : 0,
    project : 0,
    company : ' ',
    favoriteColor: ' '
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    
    let id = route.snapshot.params['id'];
    if (id !== 'undefined'){
      http.get<Employee>('api/employees/' + id).subscribe( data => {this.employee = data; });
    }
  }

  ngOnInit() {
  }

  saveData(){
    this.http.post('api/employees', this.employee).subscribe( data =>{
      this.router.navigateByUrl('/employees');
    }
    );
    
  }
}
