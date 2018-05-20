import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'projects', component: ProjectsComponent,
  children: [
    {
      path: 'edit/:id',
      component: EditComponent,
    },
    {
      path: 'add',
      component: EditComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    { path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ],
 // { path: 'projects', loadChildren: './projects/projects.component#ProjectsComponent' ,}
  }];

@NgModule({  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }

