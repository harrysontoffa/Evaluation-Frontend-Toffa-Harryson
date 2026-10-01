import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class WeatherService{
  private apiUrl = 'https://geocoding-api.open-meteo.com/v1/search'

  async getWeatherData(){
    try {
      const reponseApi= await fetch(this.apiUrl)
      if(!reponseApi.ok){
        throw new Error('Erreur lors de la recuperation de données');
      }
      const data = await reponseApi.json()
      return data.results[0]
    } catch (error) {
      console.error('Erreur API:' , error)
      throw error

    }
  }
}
