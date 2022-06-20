let initialized = false;
const TIME_BETWEEN_SCRAPES = 5 * 60 * 1000 // 5 minutes
const HOT = 10 * 60 * 1000 // someone checked this location merely under 10 minutes ago

export class LocationSubscription {

    static lastAccessed: { [key: string]: number } = {}

    static checkIn(location: string) {
        this.lastAccessed[location] = Date.now()
    }

    static initialize() {
        if (!initialized) {
            initialized = true;
        }
        this.scrape();
    }

    static async scrape() {

        let now = Date.now()
        Object.keys(this.lastAccessed).forEach((location: string)=> {
            if(now - this.lastAccessed[location] < HOT) {
                // get latest data using scrapers
            }
        })
        setTimeout(()=> this.scrape, TIME_BETWEEN_SCRAPES)

        return;
    }

}
