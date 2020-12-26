$(function() {
	getBogotaAct();
	
	getBogotaDay1();
	
	getBogotaDay2();
	
	getBogotaDay3();
	
	getParis();
	
	getLyon();
})

function getBogotaAct() {
	let url = 'http://api.openweathermap.org/data/2.5/weather?id=3688689&appid=9020d75c328d6040d1dfe00a2eecf79a&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempActBogImg = document.querySelector('#tempActBogImg');
			
			switch(datos.weather[0].icon) {
				case "01d":
					tempActBogImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempActBogImg.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempActBogImg.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempActBogImg.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempActBogImg.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempActBogImg.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempActBogImg.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempActBogImg.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempActBogImg.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempActBogImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}
			
			let tempActBog = document.querySelector('#tempActBog');
			tempActBog.innerHTML = `<span>${Math.round(datos.main.temp)}</span><span>°C</span>`;
			
			let tempActBogBanner = document.querySelector('#tempActBogBanner');
			tempActBogBanner.innerHTML = `<span>${datos.name}</span>`;
			
			let tempActBogWeather = document.querySelector('#tempActBogWeather');
			tempActBogWeather.innerHTML = `<span>${datos.weather[0].main}</span>`;
		}
	}
	
	api.send();
}

function getBogotaDay1() {
	let url = 'http://api.openweathermap.org/data/2.5/forecast?id=3688689&cnt=1&appid=3bd3e63583a5679acc67c7b5a892c76d&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempBogWeather1 = document.querySelector('#tempBogWeather1');
			tempBogWeather1.innerHTML = `<span>${Math.round(datos.list[0].main.temp_max)}° / ${Math.round(datos.list[0].main.temp_min)}°</span>`;
			
			
			var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			var f = new Date();
			var d = f.getDay()+1;
			
			if(d == 7){
				var d = 0;
			}
			
			if(d == 8){
				var d = 1;
			}
			
			let tempBogDay1 = document.querySelector('#tempBogDay1');
			tempBogDay1.innerHTML = `<span>${diasSemana[d]}</span>`;
			
			let tempBog1 = document.querySelector('#tempBog1');
			tempBog1.innerHTML = `<span>${datos.list[0].weather[0].main}</span>`;
			
			let tempBogImg1 = document.querySelector('#tempBogImg1');
			
			switch(datos.list[0].weather[0].icon) {
				case "01d":
					tempBogImg1.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempBogImg1.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempBogImg1.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempBogImg1.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempBogImg1.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempBogImg1.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempBogImg1.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempBogImg1.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempBogImg1.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempBogImg1.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}
		}
	}
	api.send();
}

function getBogotaDay2() {
	let url = 'http://api.openweathermap.org/data/2.5/forecast?id=3688689&cnt=2&appid=3bd3e63583a5679acc67c7b5a892c76d&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempBogWeather2 = document.querySelector('#tempBogWeather2');
			tempBogWeather2.innerHTML = `<span>${Math.round(datos.list[0].main.temp_max)}° / ${Math.round(datos.list[0].main.temp_min)}°</span>`;
			
			
			var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			var f = new Date();
			var d = f.getDay()+2;
			
			if(d == 7){
				var d = 0;
			}
			
			if(d == 8){
				var d = 1;
			}
			
			if(d == 9){
				var d = 2;
			}
			let tempBogDay2 = document.querySelector('#tempBogDay2');
			tempBogDay2.innerHTML = `<span>${diasSemana[d]}</span>`;
			
			let tempBog2 = document.querySelector('#tempBog2');
			tempBog2.innerHTML = `<span>${datos.list[0].weather[0].main}</span>`;
			
			let tempBogImg2 = document.querySelector('#tempBogImg2');
			
			switch(datos.list[0].weather[0].icon) {
				case "01d":
					tempBogImg2.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempBogImg2.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempBogImg2.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempBogImg2.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempBogImg2.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempBogImg2.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempBogImg2.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempBogImg2.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempBogImg2.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempBogImg2.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}	
		}
	}
	api.send();
}

function getBogotaDay3() {
	let url = 'http://api.openweathermap.org/data/2.5/forecast?id=3688689&cnt=3&appid=3bd3e63583a5679acc67c7b5a892c76d&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempBogWeather3 = document.querySelector('#tempBogWeather3');
			tempBogWeather3.innerHTML = `<span>${Math.round(datos.list[0].main.temp_max)}° / ${Math.round(datos.list[0].main.temp_min)}°</span>`;
			
			var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			var f = new Date();
			var d = f.getDay()+3;
			
			if(d == 7){
				var d = 0;
			}
			
			if(d == 8){
				var d = 1;
			}
			
			if(d == 9){
				var d = 2;
			}
			let tempBogDay3 = document.querySelector('#tempBogDay3');
			tempBogDay3.innerHTML = `<span>${diasSemana[d]}</span>`;
			
			let tempBog3 = document.querySelector('#tempBog3');
			tempBog3.innerHTML = `<span>${datos.list[0].weather[0].main}</span>`;
			
			let tempBogImg3 = document.querySelector('#tempBogImg3');
			
			switch(datos.list[0].weather[0].icon) {
				case "01d":
					tempBogImg3.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempBogImg3.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempBogImg3.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempBogImg3.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempBogImg3.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempBogImg3.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempBogImg3.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempBogImg3.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempBogImg3.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempBogImg3.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}
		}
	}
	api.send();
}

function getParis() {
	let url = 'http://api.openweathermap.org/data/2.5/weather?id=6455259&appid=9020d75c328d6040d1dfe00a2eecf79a&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempParImg = document.querySelector('#tempParImg');
			
			switch(datos.weather[0].icon) {
				case "01d":
					tempParImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempParImg.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempParImg.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempParImg.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempParImg.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempParImg.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempParImg.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempParImg.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempParImg.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempParImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}
			
			let tempParis = document.querySelector('#tempParis');
			tempParis.innerHTML = `<span>${datos.name}</span>`;
			
			let tempParisWeather = document.querySelector('#tempParisWeather');
			tempParisWeather.innerHTML = `<span>${Math.round(datos.main.temp)}</span><span>°c</span>`;
			
			let humiParis = document.querySelector('#humiParis');
			humiParis.innerHTML = `<span>Humidity ${datos.main.humidity}%</span>`;
			
			let windParis = document.querySelector('#windParis');
			windParis.innerHTML = `<span>${datos.wind.speed} km/h</span>`;
			
			let descParis = document.querySelector('#descParis');
			descParis.innerHTML = `<span>${datos.weather[0].description}</span>`;
		}
	}
	api.send();
}

function getLyon() {
	let url = 'http://api.openweathermap.org/data/2.5/weather?id=2996944&appid=9020d75c328d6040d1dfe00a2eecf79a&units=metric';
	
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState ==4) {
			let datos = JSON.parse(this.responseText);
			
			let tempLyonImg = document.querySelector('#tempLyonImg');
			
			switch(datos.weather[0].icon) {
				case "01d":
					tempLyonImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
					
				case "01n":
					tempLyonImg.innerHTML = '<img src="icons/1n.png" alt="">';
					break;
					
				case "02d":
				case "02n":
					tempLyonImg.innerHTML = '<img src="icons/2d.png" alt="">';
					break;
					
				case "03d":
				case "03n":
					tempLyonImg.innerHTML = '<img src="icons/3.png" alt="">';
					break;
					
				case "04d":
				case "04n":
					tempLyonImg.innerHTML = '<img src="icons/4.png" alt="">';
					break;
				
				case "09d":
				case "09n":
				case "10d":
				case "10n":
					tempLyonImg.innerHTML = '<img src="icons/9-10.png" alt="">';
					break;
					
				case "11d":
				case "11n":
					tempLyonImg.innerHTML = '<img src="icons/11.png" alt="">';
					break;
					
				case "13d":
				case "13n":
					tempLyonImg.innerHTML = '<img src="icons/13.png" alt="">';
					break;
					
				case "50d":
				case "50n":
					tempLyonImg.innerHTML = '<img src="icons/50.png" alt="">';
					break;
				default:
					tempLyonImg.innerHTML = '<img src="icons/1d.png" alt="">';
					break;
			}
			
			let tempLyon = document.querySelector('#tempLyon');
			tempLyon.innerHTML = `<span>${datos.name}</span>`;
			
			let tempLyonWeather = document.querySelector('#tempLyonWeather');
			tempLyonWeather.innerHTML = `<span>${Math.round(datos.main.temp)}</span><span>°c</span>`;
			
			let humiLyon = document.querySelector('#humiLyon');
			humiLyon.innerHTML = `<span>Humidity ${datos.main.humidity}%</span>`;
			
			let windLyon = document.querySelector('#windLyon');
			windLyon.innerHTML = `<span>${datos.wind.speed} km/h</span>`;
			
			let descLyon = document.querySelector('#descLyon');
			descLyon.innerHTML = `<span>${datos.weather[0].description}</span>`;
		}
	}
	api.send();
}