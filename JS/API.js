window.addEventListener('load', ()=> {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperaturaValor');
    let temperaturaDescripcion = document.getElementById('temperaturaDescripcion');
    
    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('iconoAnimado');

    let vientoVelocidad = document.getElementById('vientoVelocidad');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            //console.log(position)
            lon = position.coords.longitude
            lat = position.coords.latitude

            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=157b751cf2684b54d9493b0e856c971a&units=metric&lang=es`
            
            fetch(URL)
            .then(response => { return response.json() })
            .then(data => {
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} °C`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent = data.name

                vientoVelocidad.textContent = `${data.wind.speed} m/s`

                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
} )