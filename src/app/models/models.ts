// Une ville renvoyée par l'API
export interface GeoCity {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  country_code: string;
}

// La météo actuelle d'une ville
export interface WeatherData {
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  updatedAt: number;
}

// Un voyage
export interface Trip {
  id?: string;
  cityName: string;
  latitude: number;
  longitude: number;
  country: string;
  startDate: string;
  notes: string;
  createdAt: number;
}
