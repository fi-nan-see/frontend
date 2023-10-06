import { NgModule } from '@angular/core';
import { AuthorizationFormComponent } from './authorization-form.component';
import { AuthorizationService } from 'projects/libs/authorization';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

@NgModule({
  declarations: [
    AuthorizationFormComponent
  ],
  imports: [
    FormsModule,
    NgIf,
    AsyncPipe,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiHintModule,
    TuiInputModule,
    TuiTextfieldControllerModule
  ],
  exports: [
    AuthorizationFormComponent
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationFormModule { }
