// alert("Welcome to the Weather APP")
const city = document.getElementById("city")
const search = document.getElementById("search")
const temp = document.getElementById("temp")
const current = document.getElementById("current")
const maxtemp = document.getElementById("maxtemp")

const time = document.querySelectorAll("#local_time")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const uv = document.getElementById("uv")
const aqi = document.getElementById("aqi")
const pressure = document.getElementById("pressure")
const visibility = document.getElementById("visibility")

const sunrise= document.getElementById("sunrise")
const sunset= document.getElementById("sunset")

const date1 = document.getElementById("date1")
const date2 = document.getElementById("date2")  
const date3 = document.getElementById("date3")  
const date4 = document.getElementById("date4")  
const date5 = document.getElementById("date5")

const imgd1 = document.getElementById("imgd1")
const imgd2 = document.getElementById("imgd2")
const imgd3 = document.getElementById("imgd3")
const imgd4 = document.getElementById("imgd4")
const imgd5 = document.getElementById("imgd5")

const tempd1 = document.getElementById("tempd1")
const tempd2 = document.getElementById("tempd2")
const tempd3 = document.getElementById("tempd3")
const tempd4 = document.getElementById("tempd4")
const tempd5 = document.getElementById("tempd5")

const infod1 = document.getElementById("infod1")
const infod2 = document.getElementById("infod2")
const infod3 = document.getElementById("infod3")
const infod4 = document.getElementById("infod4")
const infod5 = document.getElementById("infod5")

const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")
const t6 = document.getElementById("t6")
const t7 = document.getElementById("t7")
const t8 = document.getElementById("t8")
const t9 = document.getElementById("t9")
const t10 = document.getElementById("t10")
const t11 = document.getElementById("t11")
const t12 = document.getElementById("t12")
const t13 = document.getElementById("t13")
const t14 = document.getElementById("t14")
const t15 = document.getElementById("t15")
const t16 = document.getElementById("t16")
const t17 = document.getElementById("t17")
const t18 = document.getElementById("t18")
const t19 = document.getElementById("t19")

const t1temp = document.getElementById("t1temp")
const t2temp = document.getElementById("t2temp")
const t3temp = document.getElementById("t3temp")
const t4temp = document.getElementById("t4temp")
const t5temp = document.getElementById("t5temp")
const t6temp = document.getElementById("t6temp")
const t7temp = document.getElementById("t7temp")
const t8temp = document.getElementById("t8temp")
const t9temp = document.getElementById("t9temp")
const t10temp = document.getElementById("t10temp")
const t11temp = document.getElementById("t11temp")
const t12temp = document.getElementById("t12temp")
const t13temp = document.getElementById("t13temp")
const t14temp = document.getElementById("t14temp")
const t15temp = document.getElementById("t15temp")
const t16temp = document.getElementById("t16temp")
const t17temp = document.getElementById("t17temp")
const t18temp = document.getElementById("t18temp")
const t19temp = document.getElementById("t19temp")

const rain1 = document.getElementById("rain1")
const rain2 = document.getElementById("rain2")
const rain3 = document.getElementById("rain3")
const rain4 = document.getElementById("rain4")
const rain5 = document.getElementById("rain5")
const rain6 = document.getElementById("rain6")
const rain7 = document.getElementById("rain7")
const rain8 = document.getElementById("rain8")
const rain9 = document.getElementById("rain9")
const rain10 = document.getElementById("rain10")
const rain11 = document.getElementById("rain11")
const rain12 = document.getElementById("rain12")
const rain13 = document.getElementById("rain13")
const rain14 = document.getElementById("rain14")
const rain15 = document.getElementById("rain15")
const rain16 = document.getElementById("rain16")
const rain17 = document.getElementById("rain17")
const rain18 = document.getElementById("rain18")
const rain19 = document.getElementById("rain19")

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

search.addEventListener("click", async () => {

    Notification.requestPermission().then(function (){
        new Notification('Weather App',{
            body: 'Thanks You For using Our Website. Get the latest weather updates.',
            icon: 'https://cdn-icons-png.flaticon.com/512/4140/4140043.png'
        });
    })

    const citi = city.value;
    const result = await check(citi);
    let loc = document.getElementById("loc")

    if (result.error) {
        alert("Please enter a valid city name");
        return;
    }

    loc.innerText = ` ${result.location.name}` + `,`  +  ` ${result.location.region} ` +  ` ${result.location.country} `;
    temp.innerText =`${result.current.temp_c}`+ `°C`;
    current.innerText = `${result.current.condition.text}`;
    maxtemp.innerText = `${result.forecast.forecastday[0].day.mintemp_c}` + `°C` + ` ~ `  + `${result.forecast.forecastday[0].day.maxtemp_c}` + `°C`; 
    humidity.innerText = `${result.current.humidity}` + `%`;
    wind.innerText = `${result.current.wind_kph}` + `km/h`;
    uv.innerText = `${result.current.uv}`;
    aqi.innerText = `${result.current.air_quality.co}` + ` ppm`;
    pressure.innerText = `${result.current.pressure_mb}` + ` hPa`;
    visibility.innerText = `${result.current.vis_km}` + ` km`;

    sunrise.innerText = `${result.forecast.forecastday[0].astro.sunrise}`;
    sunset.innerText = `${result.forecast.forecastday[0].astro.sunset}`;

    const d = new Date();
    const month = monthNames[d.getMonth()]; 

    date1.innerText = `${month}` + ` `  + result.forecast.forecastday[0].date.slice(8, 10);
    date2.innerText = `${month}` + ` `  + result.forecast.forecastday[1].date.slice(8, 10);
    date3.innerText = `${month}` + ` `  + result.forecast.forecastday[2].date.slice(8, 10);
    date4.innerText = `${month}` + ` `  + result.forecast.forecastday[3].date.slice(8, 10);
    date5.innerText = `${month}` + ` `  + result.forecast.forecastday[4].date.slice(8, 10);

    imgd1.src =`${result.forecast.forecastday[0].day.condition.icon}`;
    imgd2.src =`${result.forecast.forecastday[1].day.condition.icon}`;
    imgd3.src =`${result.forecast.forecastday[2].day.condition.icon}`;
    imgd4.src =`${result.forecast.forecastday[3].day.condition.icon}`;
    imgd5.src =`${result.forecast.forecastday[4].day.condition.icon}`;

    tempd1.innerText =   `${result.forecast.forecastday[0].day.mintemp_c}` + `°C` + ` ~ ` + `${result.forecast.forecastday[0].day.maxtemp_c}`  ;
    tempd2.innerText =   `${result.forecast.forecastday[1].day.mintemp_c}` + `°C` + ` ~ ` + `${result.forecast.forecastday[1].day.maxtemp_c}`  ;
    tempd3.innerText =   `${result.forecast.forecastday[2].day.mintemp_c}` + `°C` + ` ~ ` + `${result.forecast.forecastday[2].day.maxtemp_c}`  ;
    tempd4.innerText =   `${result.forecast.forecastday[3].day.mintemp_c}` + `°C` + ` ~ ` + `${result.forecast.forecastday[3].day.maxtemp_c}`  ;
    tempd5.innerText =   `${result.forecast.forecastday[4].day.mintemp_c}` + `°C` + ` ~ ` + `${result.forecast.forecastday[4].day.maxtemp_c}`  ;

    infod1.innerText = `${result.forecast.forecastday[0].day.condition.text}`;
    infod2.innerText = `${result.forecast.forecastday[1].day.condition.text}`;
    infod3.innerText = `${result.forecast.forecastday[2].day.condition.text}`;
    infod4.innerText = `${result.forecast.forecastday[3].day.condition.text}`;
    infod5.innerText = `${result.forecast.forecastday[4].day.condition.text}`;

    t1.src = `${result.forecast.forecastday[0].hour[5].condition.icon}`;
    t2.src = `${result.forecast.forecastday[0].hour[6].condition.icon}`;
    t3.src = `${result.forecast.forecastday[0].hour[7].condition.icon}`;
    t4.src = `${result.forecast.forecastday[0].hour[8].condition.icon}`;
    t5.src = `${result.forecast.forecastday[0].hour[9].condition.icon}`;
    t6.src = `${result.forecast.forecastday[0].hour[10].condition.icon}`;
    t7.src = `${result.forecast.forecastday[0].hour[11].condition.icon}`;
    t8.src = `${result.forecast.forecastday[0].hour[12].condition.icon}`;
    t9.src = `${result.forecast.forecastday[0].hour[13].condition.icon}`;
    t10.src = `${result.forecast.forecastday[0].hour[14].condition.icon}`;
    t11.src = `${result.forecast.forecastday[0].hour[15].condition.icon}`;
    t12.src = `${result.forecast.forecastday[0].hour[16].condition.icon}`;
    t13.src = `${result.forecast.forecastday[0].hour[17].condition.icon}`;
    t14.src = `${result.forecast.forecastday[0].hour[18].condition.icon}`;
    t15.src = `${result.forecast.forecastday[0].hour[19].condition.icon}`;
    t16.src = `${result.forecast.forecastday[0].hour[20].condition.icon}`;
    t17.src = `${result.forecast.forecastday[0].hour[21].condition.icon}`;
    t18.src = `${result.forecast.forecastday[0].hour[22].condition.icon}`;
    t19.src = `${result.forecast.forecastday[0].hour[23].condition.icon}`;

    t1temp.innerText = `${result.forecast.forecastday[0].hour[5].temp_c}` + `°C`;
    t2temp.innerText = `${result.forecast.forecastday[0].hour[6].temp_c}` + `°C`;
    t3temp.innerText = `${result.forecast.forecastday[0].hour[7].temp_c}` + `°C`;
    t4temp.innerText = `${result.forecast.forecastday[0].hour[8].temp_c}` + `°C`;
    t5temp.innerText = `${result.forecast.forecastday[0].hour[9].temp_c}` + `°C`;
    t6temp.innerText = `${result.forecast.forecastday[0].hour[10].temp_c}` + `°C`;
    t7temp.innerText = `${result.forecast.forecastday[0].hour[11].temp_c}` + `°C`;
    t8temp.innerText = `${result.forecast.forecastday[0].hour[12].temp_c}` + `°C`;
    t9temp.innerText = `${result.forecast.forecastday[0].hour[13].temp_c}` + `°C`;
    t10temp.innerText = `${result.forecast.forecastday[0].hour[14].temp_c}` + `°C`;
    t11temp.innerText = `${result.forecast.forecastday[0].hour[15].temp_c}` + `°C`;
    t12temp.innerText = `${result.forecast.forecastday[0].hour[16].temp_c}` + `°C`;
    t13temp.innerText = `${result.forecast.forecastday[0].hour[17].temp_c}` + `°C`;
    t14temp.innerText = `${result.forecast.forecastday[0].hour[18].temp_c}` + `°C`;
    t15temp.innerText = `${result.forecast.forecastday[0].hour[19].temp_c}` + `°C`;
    t16temp.innerText = `${result.forecast.forecastday[0].hour[20].temp_c}` + `°C`;
    t17temp.innerText = `${result.forecast.forecastday[0].hour[21].temp_c}` + `°C`;
    t18temp.innerText = `${result.forecast.forecastday[0].hour[22].temp_c}` + `°C`;
    t19temp.innerText = `${result.forecast.forecastday[0].hour[23].temp_c}` + `°C`;

    rain1.innerText = `${result.forecast.forecastday[0].hour[5].chance_of_rain}` + `%`;
    rain2.innerText = `${result.forecast.forecastday[0].hour[6].chance_of_rain}` + `%`;
    rain3.innerText = `${result.forecast.forecastday[0].hour[7].chance_of_rain}` + `%`;
    rain4.innerText = `${result.forecast.forecastday[0].hour[8].chance_of_rain}` + `%`;
    rain5.innerText = `${result.forecast.forecastday[0].hour[9].chance_of_rain}` + `%`;
    rain6.innerText = `${result.forecast.forecastday[0].hour[10].chance_of_rain}` + `%`;
    rain7.innerText = `${result.forecast.forecastday[0].hour[11].chance_of_rain}` + `%`;
    rain8.innerText = `${result.forecast.forecastday[0].hour[12].chance_of_rain}` + `%`;
    rain9.innerText = `${result.forecast.forecastday[0].hour[13].chance_of_rain}` + `%`;
    rain10.innerText = `${result.forecast.forecastday[0].hour[14].chance_of_rain}` + `%`;
    rain11.innerText = `${result.forecast.forecastday[0].hour[15].chance_of_rain}` + `%`;
    rain12.innerText = `${result.forecast.forecastday[0].hour[16].chance_of_rain}` + `%`;
    rain13.innerText = `${result.forecast.forecastday[0].hour[17].chance_of_rain}` + `%`;
    rain14.innerText = `${result.forecast.forecastday[0].hour[18].chance_of_rain}` + `%`;
    rain15.innerText = `${result.forecast.forecastday[0].hour[19].chance_of_rain}` + `%`;
    rain16.innerText = `${result.forecast.forecastday[0].hour[20].chance_of_rain}` + `%`;
    rain17.innerText = `${result.forecast.forecastday[0].hour[21].chance_of_rain}` + `%`;
    rain18.innerText = `${result.forecast.forecastday[0].hour[22].chance_of_rain}` + `%`;
    rain19.innerText = `${result.forecast.forecastday[0].hour[23].chance_of_rain}` + `%`;


    // `${result.forecast.forecastday[0].day.maxtemp_c}` + `°C`;
    console.log(result);
    
});

async function check(citi){
    const promis = await fetch(
        // `http://api.weatherapi.com/v1/current.json?key=285b910e5f1d4b4f96781437250906&q=${citi}&aqi=yes`
       `http://api.weatherapi.com/v1/forecast.json?key=285b910e5f1d4b4f96781437250906&q=${citi}&days=5&aqi=yes&alerts=no`
        
    );
    return await promis.json();
}



