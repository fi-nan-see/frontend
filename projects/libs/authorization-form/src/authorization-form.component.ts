import { Component } from '@angular/core';

@Component({
  selector: 'authorization-form',
  templateUrl: `authorization-form.component.html`,
  styleUrls: ['authorization-form.component.css']
})
export class AuthorizationFormComponent {
  login: string = '';
  password: string = '';
}
