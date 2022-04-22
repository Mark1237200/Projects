$(document).ready(function() {
    let weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-cloud-bolt',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
    };

    $.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=1ebc5861bba83e0214cd8df3b995ffca',
    dataType:'json',
    type:'GET',
    success:function(data){
    var $Icon = (data.weather[0].icon).substr(0,2);
    var $Temp = data.main.temp.toFixed(1) + 'º';
    var $Description = data.weather[0].description;
    var $Min = data.main.temp_min.toFixed(1) + 'º /';
    var $Max = data.main.temp_max.toFixed(1) + 'º';
    var $city = data.name;
    var $Dust = data.visibility;

    if($Dust > 7500) {
        $Dust = "<i class='fas fa-face-grin'></i> 좋음"
    } else if($Dust > 5000) {
        $Dust = "<i class='fas fa-face-meh'></i> 보통"
    } else if($Dust > 2500) {
        $Dust = "<i class='fas fa-face-frown'></i> 나쁨"
    } else {
        $Dust = "<i class='fas fa-face-mask'></i> 매우나쁨"
    }

    if($city = "Seoul") {
        $city = "서울"
    } 

    if($Description = "sky is clear") {
        $Description = "맑음"
    } else if($Description == "few clouds" || $Description == "scattered clouds" || $Description == "broken clouds") {
        $Description = "구름많음"
    } else if($Description = "overcast clouds") {
        $Description = "흐림"
    } else if($Description = "shower rain") {
        $Description = "소나기"
    } else if($Description = "light rain") {
        $Description = "보슬비"
    } else if($Description == "moderate rain" || $Description == "Rain") {
        $Description = "비"
    } else if($Description = "Thunderstorm") {
        $Description = "천둥번개"
    } else if($Description = "snow") {
        $Description = "눈"
    } else { $Description = "안개"}

    $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.Dsp').prepend($Description);
    $('.Min').prepend($Min);
    $('.Max').prepend($Max);
    $('.City').append($city);
    $('.Dust').append($Dust);
    $('.Mdust').append($Dust);
    }
    })
    });

    document.addEventListener('DOMContentLoaded', ()=>{
        var interval = window.setInterval(rollingCallback, 5000);
    })
    function rollingCallback(){

        let current = document.querySelector('.weather .banner1');
        current.classList.remove('banner1');
    

        let next = document.querySelector('.weather .banner2');

        if(next.nextElementSibling == null){
            document.querySelector('.weather div div:first-child').classList.add('banner2');
        }else{

            next.nextElementSibling.classList.add('banner2');
        }
        next.classList.remove('banner2');
        next.classList.add('banner1');
    }

    const banner = document.getElementsByClassName("banner1") || document.getElementsByClassName("banner2")

    banner.addEventListener("mouseover", function (event) {
        event.ro
    })

var express = require('express');
var app = express();
var client_id = 'YOUR_CLIENT_ID';
var client_secret = 'YOUR_CLIENT_SECRET';
app.get('/search/blog', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
    });
    app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/search/blog?query=검색어 app listening on port 3000!');
    });