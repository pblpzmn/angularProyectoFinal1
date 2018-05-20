import { InMemoryModelService } from './model.service';
import { NotFoundModule } from './not-found/not-found.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing';
import { SharedModule } from './shared/shared.module';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticateService } from './authentication/authenticate.service';

import { ProjectsModule } from './projects/projects.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees/employees.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { LayoutModule } from '@angular/cdk/layout';


const appRoutes: Routes = [
  { path: 'authentication',  component: AuthenticationComponent, },
  { path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent },
  { path: 'employees', canActivate: [AuthenticationGuard], component: EmployeesComponent },
  { path: 'projects', canActivate: [AuthenticationGuard], component: ProjectsComponent },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes),
    AuthenticationModule,
    HomeModule,
    EmployeesModule,
    ProjectsModule,
    NotFoundModule,
    SharedModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryModelService),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
