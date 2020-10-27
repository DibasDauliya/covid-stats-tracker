class UI{
    constructor(){
        this.todaysStats = document.getElementById('todaysStats')
        this.totalStats = document.getElementById('totalStats')
        this.country = document.querySelector('h1')
        this.lastUpdated = document.getElementById('lastUpdated')
    }

    setData(data) {
        this.country.innerText = data.country

        this.todaysStats.innerHTML = `
        <li class="list-group-item"><strong>Cases: </strong>${data.dailyConfirmed}</li>
        <li class="list-group-item"><strong>Deaths: </strong>${data.dailyDeaths}</li>
        `
        this.totalStats.innerHTML = `
        <li class="list-group-item"><strong>Cases: </strong>${data.totalConfirmed}</li>
        <li class="list-group-item"><strong>Recovered: </strong>${data.totalRecovered}</li>
        <li class="list-group-item"><strong>Critical: </strong>${data.totalCritical}</li>
        <li class="list-group-item"><strong>Deaths: </strong>${data.totalDeaths}</li>
        `

        this.lastUpdated.innerText = `Last Updated at ${data.lastUpdated}`
    }
}