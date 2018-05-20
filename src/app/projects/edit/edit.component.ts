import { Router, ActivatedRoute } from '@angular/router';
import { Project } from './../project';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  project: Project = {
    id : Math.floor((Math.random()*60)+1),
    name : '',
    teamSize: 0, 
    clientName: '' 
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    
    let id = route.snapshot.params['id'];
    if (id !== 'undefined'){
      http.get<Project>('api/projects/' + id).subscribe( data => {this.project = data; });
    }
  }

  ngOnInit() {
  }

  saveData(){
    this.http.post('api/projects', this.project).subscribe( data =>{
      this.router.navigateByUrl('/projects');
    }
    );
    
  }
}
