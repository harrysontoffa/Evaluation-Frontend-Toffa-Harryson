import { Component, Input,Output,EventEmitter } from '@angular/core';
import  {Trip, WeatherData} from '../../models/models'


@Component({
  imports: [],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard {

   @Input() trip!: Trip
   @Input() weather?: WeatherData

   @Output()  delete = new EventEmitter<string>()



  handleDelete(){
    if(this.trip.id){
      this.delete.emit(this.trip.id)
    }

  }



}
