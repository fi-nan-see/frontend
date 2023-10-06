import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {TuiButtonModule, TuiGroupModule} from "@taiga-ui/core";
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    TuiGroupModule,
    RouterLink,
    RouterLinkActive,
    TuiButtonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
