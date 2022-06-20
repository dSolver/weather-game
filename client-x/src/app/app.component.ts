import { WeatherDTO } from './../../../server/models/weather.dto';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-x';
  weather: WeatherDTO | undefined;
  busy = false
  error: Error | undefined;

  lastUpdated: Date | undefined;

  constructor(private api: ApiService) {

  }

  getWeather() {
    this.busy = true;
    this.error = undefined;
    this.api.fetch().subscribe((data) => {
      this.busy = false;
      this.weather = data as WeatherDTO
      this.lastUpdated = new Date(this.weather.current.last_updated_epoch * 1000)
    }, (err) => {
      this.busy = false
      this.error = err;
    })
  }

  ngOnInit() {
    this.getWeather();
  }
}
