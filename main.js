const data = new COVID
const ui = new UI

document.getElementById('inputText').addEventListener('keyup', (e)=>{

    const inputValue = e.target.value.toLowerCase()

    data.getData()
    .then(res => {

        if(inputValue !== ''){
            res.forEach(data => {
                const country = data.country.toLowerCase()

                const countryCode = data.countryCode.toLowerCase()

                if(inputValue === country || inputValue === countryCode) {
                    // console.log(data.countryCode)
                    ui.setData(data)

                    // save to LS
                    saveToLS(inputValue)
                }
            });
        }

        console.log(res);
    }) 
    .catch(err => console.log(err, 'Some country do not have their countryCode'))

    // console.log(inputValue)

    

})

function saveToLS(value){
    if(localStorage.getItem('country') === null) {
        localStorage.setItem('country', value)
    } else {
        localStorage.clear()
        localStorage.setItem('country', value)
    }
}

document.addEventListener('DOMContentLoaded', setFromLS)

function setFromLS() {
    data.getData()
    .then(res => {

        if(localStorage.getItem('country') === null){
            res.forEach(data => {
                const country = data.country.toLowerCase()
                if('nepal' === country) {
                    // console.log(data.countryCode)
                    ui.setData(data)

                   
                }
            });
        } else {
            res.forEach(data => {
                const country = data.country.toLowerCase()
                const countryCode = data.countryCode.toLowerCase()

                if(localStorage.getItem('country') === country || localStorage.getItem('country') === countryCode) {
                    // console.log(data.countryCode)
                    ui.setData(data)

                  
                }
            });
        }

        // console.log(res);
    })
    .catch(err => console.log(err, 'Some country do not have their countryCode'))
}
