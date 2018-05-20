import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProjectDialogComponent } from './dialog/dialog.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { MatInputModule, MatFormFieldModule, MatDialog } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [ProjectsComponent, ProjectDialogComponent],
  entryComponents: [ProjectDialogComponent],
  providers: [MatDialog]
})
export class ProjectsModule { }
