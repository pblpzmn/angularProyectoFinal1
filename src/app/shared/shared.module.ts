import { MyNavComponent } from './my-nav/my-nav.component';
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
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  declarations: [SharedComponent, MyNavComponent],
  exports : [MyNavComponent]

  
})
export class SharedModule { }
