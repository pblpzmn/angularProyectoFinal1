import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'authentication',
    component: AuthenticationComponent,
    children: [
        { path: 'logout', component: AuthenticationComponent },
      ]
    }
];

@NgModule({  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ],
})
export class AuthenticationRoutingModule { }

