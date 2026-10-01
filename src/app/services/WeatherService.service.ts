import { Injectable } from "@angular/core";
import { GeoCity } from "../models/models";
@Injectable({
  providedIn: 'root'
})

export class WeatherService{
  private apiUrl = 'https://geocoding-api.open-meteo.com/v1/search'

  async getWeatherData(query: string):Promise<GeoCity[]>{
    try {
       const reponseApi= await fetch(`${this.apiUrl}?name=${encodeURIComponent(query)}&count=5&language=fr`)
      if(!reponseApi.ok){
        throw new Error('Erreur lors de la recuperation de données');
      }
      const data = await reponseApi.json()
      return data.results??[]
    } catch (error) {
      console.error('Erreur API:' , error)
      throw error

    }
  }
}
