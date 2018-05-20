import { MyNavComponent } from './my-nav/my-nav.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  declarations: [SharedComponent, MyNavComponent, DialogComponent],
  exports : [MyNavComponent, DialogComponent]

  
})
export class SharedModule { }
