import { Component } from '@angular/core';
import { TripCard } from '../../layout/trip-card/trip-card';

@Component({
  imports: [TripCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
