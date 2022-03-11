import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WeatherService{
    url = 'https://api.openweathermap.org/data/2.5/weather';
    apiKey = '62b26bfc22e74a8b0403cd516cd1432a';
    constructor(private http: HttpClient){}



getWeatherDataByCoords(lat, lon){
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon) 
    .set('units','metric')
    .set('appid', this.apiKey)
    return this.http.get(this.url,{params});
}

getWeatherDataByCity(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('units','metric')
    .set('appid', this.apiKey)
    return this.http.get(this.url,{params});
  }
}