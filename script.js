 window.addEventListener('load' , ()=> {
  let long;
  let lat;

let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone =document.querySelector(".location-timezone");
let ico = document.querySelector(".weather-icon")
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
   long = position.coords.longitude;
   lat = position.coords.latitude;
   //icon1=

  let proxy ='https://cors-anywhere.herokuapp.com/';
   let api =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=ed7cd001ce5b861de2a021e88b5ba966`;
  //let ic =` http://openweathermap.org/img/wn/${icon1}@2x.png`;

   fetch(api)
   .then(response => {
     return response.json();
   })
   .then(data => {
     console.log(data);
     let {temp ,summary} = data.current;
     temperatureDegree.textContent = temp;
     let {description}=data.current.weather[0];
     temperatureDescription.textContent = description;
     locationTimezone.textContent = data.timezone;
    let x = data.current.weather[0].icon;
    console.log(`${x}`);
ico.innerHTML =`<img src="http://openweathermap.org/img/wn/${x}@2x.png"/>`;


   });
 });
  }

});
