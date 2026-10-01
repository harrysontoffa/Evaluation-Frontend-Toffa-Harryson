import { Component, Input, Output, EventEmitter, signal, Signal } from '@angular/core';
import { GeoCity, Trip } from '../../models/models';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-trip',
  styleUrl: './add-trip.css',
  templateUrl: './add-trip.html',
})
export class AddTrip {
  @Input() searchResults: GeoCity[] = []
  @Input() isSubmitting: boolean = false;

  villeRechercher= signal<string>('')
  villeChoisie = signal<GeoCity|null>(null)
  date = signal<string>('')
  note = signal<string>('')

  @Output() search = new EventEmitter<string>()
  @Output() addTrip = new EventEmitter<Omit<Trip, 'id'>>()

  handleSearch(value: string){
    this.villeRechercher.set(value)
    if(value.trim().length<2){
      this.search.emit(value.trim());
    }
  }

  ChoixVille(villeTrouvé: GeoCity){
    this.villeChoisie.set(villeTrouvé)
    this.villeRechercher.set(villeTrouvé.name)
  }

}
