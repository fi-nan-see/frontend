import { NgModule } from '@angular/core';
import { AuthorizationFormComponent } from './authorization-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiHintModule, TuiLoaderModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import { ApiModule } from 'projects/libs/api/src/public-api';
import {AuthorizationService} from "./authorization.service";
import { AuthClient } from 'projects/libs/api/src/lib/auth-client';

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
        TuiButtonModule,
        ApiModule,
        TuiLoaderModule,
    ],
  exports: [
    AuthorizationFormComponent
  ],
  providers: [
    AuthClient,
    AuthorizationService,
  ]
})
export class AuthorizationFormModule { }
