import { NgModule } from '@angular/core';
import { AuthorizationFormComponent } from './authorization-form.component';
import { AuthorizationService } from 'projects/libs/authorization';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthorizationFormComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    AuthorizationFormComponent
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationFormModule { }
