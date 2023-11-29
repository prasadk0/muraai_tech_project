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
  openSpecificLink() {
    // Replace 'https://example.com' with your specific link
    const specificLink = 'http://localhost:5000/';

    // Open the link in a new tab or window
    window.open(specificLink, '_blank');
  }
}
