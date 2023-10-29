import { NgModule } from '@angular/core';
import { AuthorizationFormComponent } from './authorization-form.component';
import { AuthorizationService } from 'projects/libs/authorization';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import { PlanClient } from 'projects/libs/api-client/src';

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
    TuiTextfieldControllerModule,
    TuiButtonModule
  ],
  exports: [
    AuthorizationFormComponent
  ],
  providers: [
    AuthorizationService,
    PlanClient
  ]
})
export class AuthorizationFormModule { }
