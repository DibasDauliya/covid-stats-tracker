class COVID{
    constructor() {
        this.URL = 'https://api.coronatracker.com/v3/stats/worldometer/country'
    }

    async getData(){
        const res = await fetch(this.URL)
        const resData = await res.json()

        return resData
    }
}