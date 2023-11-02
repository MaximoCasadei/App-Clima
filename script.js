let apikey = '933123a9283790bd74ccf1a3875d479b'
let urlWeather = 'https://api.openweathermap.org/data/2.5/weather'

let buscar = document.querySelector('#botonBusqueda')

buscar.addEventListener('click' , ()=>{
    let ciudad = document.querySelector('#ciudadEntrada').value
    if(ciudad){
        datosClima(ciudad)
    }
})

function datosClima(ciudad){
    fetch(`${urlWeather}?q=${ciudad}&appid=${apikey}`)
    .then(response => response.json())
    .then(response => MostrarEnPantalla(response))
}


function MostrarEnPantalla(response){
    const divClima = document.querySelector('#divClima')
    const descripcion = document.querySelector('#descripcion')
    const icono = response.weather[0].icon

    descripcion.innerHTML = `<h1>${response.name}, ${response.sys.country}</h1>
                            <img src= https://openweathermap.org/img/wn/${icono}@2x.png >`

    divClima.innerHTML = 
                        `
                        <h3>La temperatura es de: ${Math.floor(response.main.temp - 273.15)}°C</h3>
                        <h3>La humedad es de: ${Math.floor(response.main.humidity)}%</h3>
                        <h3>Descipción del clima: ${response.weather[0].main}, ${response.weather[0].description}</h3>
                        <h3>El viento es de: ${Math.floor(response.wind.speed)}Km</h3>
                        `


}
