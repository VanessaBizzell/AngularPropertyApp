import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLocationComponent } from '../home-location/home-location.component';
import { HomeLocation } from '../home-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, HomeLocationComponent],
  template: `
   <section>
    <form>
      <input type="text" placeholder="Filter by City">
      <button class="primary" type="button">Search</button>
    </form>
</section>
<section class="results">
  <app-home-location *ngFor="let homeLocation of homeLocationList" [homeLocation]="homeLocation"></app-home-location>
</section>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeLocationList: HomeLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.homeLocationList = this.housingService.getAllHomeLocations();
  }
}
