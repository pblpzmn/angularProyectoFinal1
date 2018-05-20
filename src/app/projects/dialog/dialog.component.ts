import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Project } from '../project';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ProjectDialogComponent {
  project: Project;
  constructor( public dialogRef: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.project = data.project;
    console.log(this.project);
   }

   saveData(): void {
    this.dialogRef.close({ data: {project: this.project} });
  }
}
