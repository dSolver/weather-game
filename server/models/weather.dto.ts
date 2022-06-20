export interface WeatherLocationDTO {
    "name": string,
    "region": string,
    "country": string,
    "lat": number,
    "lon": number,
    "tz_id": string,
    "localtime_epoch": number,
    "localtime": string
}

export interface WeatherConditionDTO {
    text: string,
    code: number,
    icon: string
}


export interface WeatherCurrentDTO {
    "last_updated_epoch": number,
    "last_updated": string,
    "temp_c": number,
    "temp_f": number,
    "is_day": number,
    "condition": WeatherConditionDTO
    "wind_mph": number,
    "wind_kph": number,
    "wind_degree": number,
    "wind_dir": DIRECTION,
    "pressure_mb": number,
    "pressure_in": number,
    "precip_mm": number,
    "precip_in": number,
    "humidity": number,
    "cloud": number,
    "feelslike_c": number,
    "feelslike_f": number,
    "vis_km": number,
    "vis_miles": number,
    "uv": number,
    "gust_mph": number,
    "gust_kph": number
}

export interface WeatherForecastDTO {
    forecastday: WeatherForecastDayDTO[]
}

export interface WeatherAstroDTO {

    "sunrise": string,
    "sunset": string
    "moonrise": string,
    "moonset": string,
    "moon_phase": string,
    "moon_illumination": string;
}

export interface WeatherForecastDaySummaryDTO {
    "maxtemp_c": number,
    "maxtemp_f": number,
    "mintemp_c": number,
    "mintemp_f": number,
    "avgtemp_c": number,
    "avgtemp_f": number,
    "maxwind_mph": number,
    "maxwind_kph": number,
    "totalprecip_mm": number,
    "totalprecip_in": number,
    "avgvis_km": number,
    "avgvis_miles": number,
    "avghumidity": number,
    "daily_will_it_rain": number,
    "daily_chance_of_rain": number,
    "daily_will_it_snow": number,
    "daily_chance_of_snow": number,
    "condition": WeatherConditionDTO,
    "uv": number
}

export interface WeatherForecastHourDTO {
    "time_epoch": number,
    "time": "2022-06-12 00:00",
    "temp_c": number,
    "temp_f": number,
    "is_day": boolean,
    "condition": WeatherConditionDTO,
    "wind_mph": number,
    "wind_kph": number,
    "wind_degree": number,
    "wind_dir": DIRECTION,
    "pressure_mb": number,
    "pressure_in": number,
    "precip_mm": number,
    "precip_in": number,
    "humidity": number,
    "cloud": number,
    "feelslike_c": number,
    "feelslike_f": number,
    "windchill_c": number,
    "windchill_f": number,
    "heatindex_c": number,
    "heatindex_f": number,
    "dewpoint_c": number,
    "dewpoint_f": number,
    "will_it_rain": boolean,
    "chance_of_rain": number,
    "will_it_snow": boolean,
    "chance_of_snow": number,
    "vis_km": number,
    "vis_miles": number,
    "gust_mph": number,
    "gust_kph": number,
    "uv": number
}

export interface WeatherForecastDayDTO {
    date: string;
    date_epoch: number;
    day: WeatherForecastDaySummaryDTO,
    astro: WeatherAstroDTO,
    hour: WeatherForecastHourDTO
}

export interface WeatherDTO {
    "location": WeatherLocationDTO,
    "current": WeatherCurrentDTO,
    "forecast": WeatherForecastDTO
}

export enum DIRECTION {
    N = 'N',
    E = 'E',
    W = 'W',
    S = 'S',
    NE = 'NE',
    NW = 'NW',
    SE = 'SE',
    SW = 'SW',
    ESE = 'ESE',
    SEE = 'SEE',
    ENE = 'ENE',
    NEE = 'NEE',
    WSW = 'WSW',
    WEE = 'WEE',
    WNW = 'WNW',
    NWW = 'NWW'
}