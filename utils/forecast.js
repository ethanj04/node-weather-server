const request = require('request')

const forecast = (lat, long, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=c9a25410e19eafbea5e346cb76bf6a84&query=' + lat +',' + long + '&units=f'

request ( {url, json:true}, (error, {body}) => {
    if(error) {
        callback("Unable to connect to weatherstack API!", undefined)
    } else if( body.error ) {
        callback("Unable to find location!", undefined) 
    } else {
        callback( undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees outside. It feels like " +  body.current.feelslike  +  " outside. \n\n  The wind speed is " + body.current.wind_speed+ " mph and the wind direction is " + body.current.wind_dir +".")
    }
})
}

module.exports = forecast