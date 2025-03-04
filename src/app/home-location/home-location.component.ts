import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLocation } from '../home-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class ="listing" *ngIf="homeLocation">
      <img class= "listing-photo" [src]="homeLocation.photo" alt="Exterior photo of {{homeLocation.name}}"/>
      <h2 class= "listing-heading">{{ homeLocation.name }}<h2>
      <p class= "listing-location">{{homeLocation.city}}, {{homeLocation.state}}</p>
      <a [routerLink]="['/details', homeLocation.id]">Learn More</a> 
    
  `,
  styleUrls: ['./home-location.component.css']
})
export class HomeLocationComponent {
  @Input() homeLocation!: HomeLocation;

}
