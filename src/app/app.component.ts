import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" 
      alt="logo" aria-hidden="true"/>
      </header>
      <section class="content">
        <!-- referencing component syntax -->
        <router-outlet></router-outlet>
      </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]

})
export class AppComponent {
  title = 'homes';
}
