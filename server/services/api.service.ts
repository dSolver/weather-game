import { LatLongService } from './latlong.service';
import { LatLong } from "../models/latlong.dto";
import { WeatherDTO } from "../models/weather.dto";
import axios from 'axios';

const CACHE_EXPIRY = 20 * 60 * 1000

export class APIService {
    static cache = new Map<string, WeatherDTO>()

    static checkCache(query?: string, latLong?: LatLong): WeatherDTO | undefined {
        let search = query || '';

        if (latLong) {
            // prefer latLong
            const searchLL = LatLongService.round(latLong)
            search = LatLongService.format(searchLL)
        }

        if (this.cache.has(search)) {
            const cachedResult = this.cache.get(search) as WeatherDTO
            const since = Date.now() - cachedResult?.current.last_updated_epoch * 1000
            if (since < CACHE_EXPIRY) {
                return cachedResult
            } else {
                console.log("Found cached, but outdated")
            }
        }

        return undefined;
    }

    static async fetch(query?: string): Promise<WeatherDTO> {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${query}&days=4&aqi=no&alerts=no`
        const { data } = await axios.get(url)
        console.log("Fetched: ", data)
        // replace icons with local path
        this.replaceIconPaths(data)
        return data as WeatherDTO
    }

    static async get(query?: string, latLong?: LatLong): Promise<WeatherDTO> {
        if (!query && !latLong) {
            throw new Error('Invalid get parameters (empty)')
        }

        else {
            const cached = this.checkCache(query, latLong)
            if (cached) {
                return cached;
            } else {
                console.log("No cache, getting data from remote")
                let search = query || '';

                if (latLong) {
                    // prefer latLong
                    const searchLL = LatLongService.round(latLong)
                    search = LatLongService.format(searchLL)
                }

                const results = await this.fetch(search)

                this.cache.set(search, results)
                return results
            }
        }
    }

    static replaceIconPaths(data: any) {
        if (Array.isArray(data)) {
            data.forEach((ele) => {
                this.replaceIconPaths(ele)
            })
        } else if (typeof data === 'object') {
            Object.keys(data).forEach((key) => {
                if (typeof (data[key]) === 'string') {
                    if (key === 'icon') {
                        data[key] = data[key].replace('//cdn.weatherapi.com/', 'assets/')
                    }
                } else if (typeof (data[key]) === 'object') {
                    this.replaceIconPaths(data[key])
                }
            })
        }
    }
}