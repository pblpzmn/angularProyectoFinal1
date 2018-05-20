import { ProjectsRoutingModule } from './projects.routing';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [ProjectsComponent, EditComponent, ListComponent],
  exports : [ProjectsRoutingModule]
  
})
export class ProjectsModule { }
