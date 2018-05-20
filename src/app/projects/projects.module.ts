import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
