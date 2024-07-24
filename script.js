const apikey = "15a3622102ecec3fa0dce5dd44db1589";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city){
	const response = await fetch(apiurl +city + `&appid=${apikey}`);
	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}else{
		var data = await response.json();

	let weatherStatus = data.weather[0].main;
	document.querySelector(".city").innerHTML = data.name + " " + "(" + weatherStatus +")";
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity;
	document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

	if(data.weather[0].main=="Clouds"){
		weatherIcon.src = "images/clouds.png";
	}else if(data.weather[0].main=="Clear"){
		weatherIcon.src = "images/Clear.png";
	}
	else if(data.weather[0].main=="Rain"){
		weatherIcon.src = "images/rain.png";
	}
	else if(data.weather[0].main=="Drizzle"){
		weatherIcon.src = "images/drizzle.png";
	}
	else if(data.weather[0].main=="Mist"){
		weatherIcon.src = "images/mist.png";
	}

	document.querySelector(".weather").style.display= "block";
	document.querySelector(".error").style.display= "none";


	}
}

searchbtn.addEventListener("click", ()=>{
	checkweather(searchBox.value);
});

checkweather();
