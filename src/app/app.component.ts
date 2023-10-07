import { Component } from '@angular/core';
import {NavigationElement} from "../../projects/libs/navigation/src";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finansee';

  readonly navigationElements: NavigationElement[] = [
    {
      name: 'Главная страница',
      routerLink: '/'
    },
    {
      name: 'Список планов',
      routerLink: '/plan-list'
    }
  ]
}
