import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    SharedModule,
    MatIconModule,
    LayoutModule
  ],
  declarations: [HomeComponent,]
})
export class HomeModule { }
