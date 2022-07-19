import axios from 'axios'

let today = new Date();
let month = today.getMonth(); // 월
let date = today.getDate(); // 일

let weekday = new Array(7);
weekday[0] = "일요일";
weekday[1] = "월요일";
weekday[2] = "화요일";
weekday[3] = "수요일";
weekday[4] = "목요일";
weekday[5] = "금요일";
weekday[6] = "토요일";

let day = weekday[today.getDay()];

// $(document).ready(function() {
//     let weatherIcon = {
//     '01' : 'fas fa-sun',
//     '02' : 'fas fa-cloud-sun',
//     '03' : 'fas fa-cloud',
//     '04' : 'fas fa-cloud-meatball',
//     '09' : 'fas fa-cloud-sun-rain',
//     '10' : 'fas fa-cloud-showers-heavy',
//     '11' : 'fas fa-cloud-bolt',
//     '13' : 'far fa-snowflake',
//     '50' : 'fas fa-smog'
//     };

//     axios({
//     url:'https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=1ebc5861bba83e0214cd8df3b995ffca',
//     dataType:'json',
//     type:'GET',
//     success:function(data){
//     let $Icon = (data.weather[0].icon).substr(0,2);
//     let $Temp = data.main.temp.toFixed(1) + 'º';
//     let $Description = data.weather[0].description;
//     let $Min = data.main.temp_min.toFixed(1) + 'º /';
//     let $Max = data.main.temp_max.toFixed(1) + 'º';
//     let $city = data.name;
//     let $Dust = data.visibility;

//     if($Dust > 7500) {
//         $Dust = "<i class='fas fa-face-grin'></i> 좋음"
//     } else if($Dust > 5000) {
//         $Dust = "<i class='fas fa-face-meh'></i> 보통"
//     } else if($Dust > 2500) {
//         $Dust = "<i class='fas fa-face-frown'></i> 나쁨"
//     } else {
//         $Dust = "<i class='fas fa-face-mask'></i> 매우나쁨"
//     }

//     if($city = "Seoul") {
//         $city = "서울"
//     } 

//     if($Description = "sky is clear") {
//         $Description = "맑음"
//     } else if($Description == "few clouds" || $Description == "scattered clouds" || $Description == "broken clouds") {
//         $Description = "구름많음"
//     } else if($Description = "overcast clouds") {
//         $Description = "흐림"
//     } else if($Description = "shower rain") {
//         $Description = "소나기"
//     } else if($Description = "light rain") {
//         $Description = "보슬비"
//     } else if($Description == "moderate rain" || $Description == "Rain") {
//         $Description = "비"
//     } else if($Description = "Thunderstorm") {
//         $Description = "천둥번개"
//     } else if($Description = "snow") {
//         $Description = "눈"
//     } else { $Description = "안개"}

//     $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
//     $('.CurrTemp').prepend($Temp);
//     $('.Dsp').prepend($Description);
//     $('.Min').prepend($Min);
//     $('.Max').prepend($Max);
//     $('.City').append($city);
//     $('.Dust').append($Dust);
//     $('.Mdust').append($Dust);
//     }
//     })
//     });

const FiveDaysWeather = () => {
    

    return (
    <h1>
        {month}월 {date}일 {day}
        <section>

        </section>
    </h1>
    )
}

export default FiveDaysWeather