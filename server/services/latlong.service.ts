import { LatLong } from './../models/latlong.dto';
export class LatLongService {
    static round(latlong: LatLong): LatLong {
        return {
            lat: Math.round(latlong.lat * 10) / 10,
            long: Math.round(latlong.long * 10) / 10
        }
    }

    static format(latlong: LatLong): string {
        return `${latlong.lat.toFixed(2)},${latlong.long.toFixed(2)}`
    }
}