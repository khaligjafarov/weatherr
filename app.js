"use strict";
$(document).ready(function () {


    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=2c018362f84acceb29faa5ce7edc9e32&units=metric`;
            async function myweather() {
                let responce = await fetch(url);
                let data = await responce.json();
                $("#city").html(data.name);
                $("#temp").html(data.main.temp);
                $("#feels").html(data.main.feels_like);
                $("#myWeather").val("");
                console.log(data);
            }
            myweather();
        }

    });

    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=fe57130549e94791f490784ddc5b1ff8&units=metric`;
        async function myweather() {
            let responce = await fetch(url);
            let data = await responce.json();
            $("#city").html(data.name);
            $("#temp").html(data.main.temp);
            $("#feels").html(data.main.feels_like);
            $("#myWeather").val("");
            console.log(data);
        }
        myweather();
    });


});