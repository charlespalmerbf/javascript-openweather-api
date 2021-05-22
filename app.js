//Init Storage Object
const storage = new Storage()

//Get Stored Location Data 
const weatherLocation = storage.getLocationData()

//Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//Initialize UI Object
const ui = new UI()

//Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //Change Location
  weather.changeLocation(city, country)

  //Set Location into Local Storage
  storage.setLocationData(city, country)

  //Get and Display Weather
  getWeather()

  //Close Modal
  $('#locModal').modal('hide')

  const modal = document.getElementById('locModal')

})

function getWeather() {

  weather.getWeather().then(results => {ui.paint(results)}).catch(err => console.log(err))
  
}