import { NgModule } from '@angular/core';
import { AuthorizationFormComponent } from './authorization-form.component';
import { AuthorizationService } from 'projects/libs/authorization';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  declarations: [
    AuthorizationFormComponent
  ],
  imports: [
    FormsModule,
    NgIf,
    AsyncPipe
  ],
  exports: [
    AuthorizationFormComponent
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationFormModule { }
