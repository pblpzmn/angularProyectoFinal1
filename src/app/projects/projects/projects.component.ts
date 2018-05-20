import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from './../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  nextId: number;
  projects: Project[];
  tableColumnsToDisplay = ['id', 'name', 'teamSize', 'clientName', 'delete'];
  constructor(private http: HttpClient, private dialog: MatDialog) { 
    console.log('ProjectsComponent');
    http.get<Project[]>('api/projects').subscribe( data => {this.projects = data;  this.nextId = data.length; });
  }

  ngOnInit() {
  }
  delete(id){
    this.projects = this.projects.filter(x => x.id !== id );
    console.log('delete');
    console.log(id);
  
  }


  openDialog(action, id): void {
    console.log(action);
    console.log(id);
    let project: Project;
    if (action==='add'){
      project = {
        id : this.nextId,
        name : '',
        teamSize: 2, 
        clientName: "Cliente" 
      }
    } else {
      project = this.projects.filter(x => x.id === id)[0];
    }
    
    console.log(project);
    let dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '250px',
      data: { action: action, project: project}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (action === 'edit') {
        this.projects[id - 1] = result.data.project;
        this.http.post('api/projects', result.data.project).subscribe(console.log);
      }  
      if (action === 'add') {
        console.log("pusshing");
        this.projects.push(result.data.project);
      }
//      this.changeDetectorRefs.detectChanges();
    });

  }

}
