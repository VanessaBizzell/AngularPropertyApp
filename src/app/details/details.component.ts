import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HomeLocation } from "../home-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { first } from "rxjs";

@Component({
  selector: "app-details",
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="homeLocation?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ homeLocation?.name }}</h2>
        <p class="listing-location">
          {{ homeLocation?.city }}, {{ homeLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this home location</h2>
        <ul>
          <li>Available Units: {{ homeLocation?.availableUnits }}</li>
          <li>Wifi: {{ homeLocation?.wifi ? "Yes" : "No" }}</li>
          <li>Laundry: {{ homeLocation?.laundry ? "Yes" : "No" }}</li>
        </ul>
        <section class="listing-apply">
          <h2 class="section-heading">Apply now to live here</h2>
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="firstName">First Name</label>
            <input id="firstName" type="text" formControlName="firstName" />

            <label for="lastName">Last Name</label>
            <input id="lastName" type="text" formControlName="lastName" />

            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" />

            <button type="submit" class="primary">Apply Now</button>
          </form>
        </section>
      </section>
    </article>
  `,
  styleUrls: [`./details.component.css`],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  homeLocation: HomeLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const homeLocationId = Number(this.route.snapshot.params["id"]);
    this.homeLocation = this.housingService.getHomeLocationById(homeLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
