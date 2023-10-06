import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {TuiButtonModule, TuiGroupModule} from "@taiga-ui/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    TuiGroupModule,
    RouterLink,
    RouterLinkActive,
    TuiButtonModule,
    NgForOf
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
