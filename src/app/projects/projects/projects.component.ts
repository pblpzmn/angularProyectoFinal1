import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  tableColumnsToDisplay = ['id', 'name', 'teamSize', 'clientName', 'delete'];
  constructor(private http: HttpClient) { 
    console.log('ProjectsComponent');
    http.get<Project[]>('api/projects').subscribe( data => this.projects = data);
  }

  ngOnInit() {
  }
  delete(id){
    this.projects = this.projects.filter(x => x.id !== id );
    console.log('delete');
    console.log(id);
  
  }
}
