import { Component, HostBinding } from '@angular/core';
import { routerAnimationState } from './app/products/shared/router_animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routerAnimationState]
})
export class AppComponent {
  title = 'newproject';
  @HostBinding('RouteAnimationTrigger') routerAnimation=true;
}
