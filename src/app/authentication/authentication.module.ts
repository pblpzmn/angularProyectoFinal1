import { AuthenticationRoutingModule } from './authentication.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AuthenticationRoutingModule
  ],
  exports : [AuthenticationRoutingModule ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
