import {Component, Input} from '@angular/core';
import {NavigationElement} from "./models";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.css'
  ]
})
export class NavigationComponent {
  @Input({required: true})
  elements: NavigationElement[] = [];
}
