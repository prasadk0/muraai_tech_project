import { Component, HostBinding, HostListener } from '@angular/core';
import { routerAnimationState } from './app/products/shared/router_animation';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routerAnimationState]
})
export class AppComponent {
  breadcrumbs: { label: string; url: string }[] = [];
  constructor(private keycloack:KeycloakService,private router: Router, private activatedRoute: ActivatedRoute){

  }
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string; url: string }[] = []): { label: string; url: string }[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }




  phoneNumber = '7821013670'; 
  getWhatsAppLink(){
       // Replace with the desired phone number
    

      return `https://wa.me/${this.phoneNumber}`;
    }
  logout(){
  this.keycloack.logout();  
  }
  title = 'newproject';
  @HostBinding('RouteAnimationTrigger') routerAnimation=true;
  openSpecificLink() {
    // Replace 'https://example.com' with your specific link
    const specificLink = 'http://localhost:5000/';

    // Open the link in a new tab or window
    window.open(specificLink, '_blank');
  }
  openSpecificLink1(){
    const specificLink = 'http://localhost:57788/';

    // Open the link in a new tab or window
    window.open(specificLink, '_blank');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleScrollTopButtonVisibility();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private toggleScrollTopButtonVisibility() {
    const scrollButton = document.getElementById('scrollTopButton');
    if (scrollButton) {
      scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  }
}
