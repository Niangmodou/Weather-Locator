
let submit = document.getElementById("btn");
let zipcode = document.getElementById("zip");
let apikey = "d292115d03505d7c797c1bc48626448e";

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");

let city = "";
let weather = "";
let temp = 0;

function makeCall(zipcode){
    let url = "http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",US&appid="+apikey;
    var request = new XMLHttpRequest();
    request.open('GET',url, true);
    request.onload = function(){
        let data = JSON.parse(this.response);
        city = data["name"];
        weather = data["weather"][0]["main"];
        temp = parseInt(1.8*(data["main"]["temp"]-273.15)+32); 

    }
    request.send();
}

function display(){
    console.log(city,weather,temp);
    document.getElementById("city").innerHTML = city;
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temp").innerHTML = temp;
};

function main(){
    if (submit !=null){
        submit.addEventListener("click",function(){
        //zipcode = zipcode.value;
            makeCall(zipcode.value);
            console.log("hu",city,weather,temp);
            display()
        })
    };
}
