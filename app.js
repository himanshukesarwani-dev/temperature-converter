let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");



function kelvinHandler() {

 
        kelvin.value = Number(celcius.value) + 273.15;
        kelvin.innerText = kelvin.value;
    

}

function celciusToFahrenheitConverter() {

    if (celcius.value == "") {
        fahrenheit.value = null;
      

    } else {
        fahrenheit.value = (9 / 5 * Number(celcius.value)) + 32;
        fahrenheit.innerText = fahrenheit.value;
    }



}

function fahrenheitToCelciusConverter() {

if(fahrenheit.value == ""){
     celcius.value = null;
}
  else 
  {
    celcius.value = (Number(fahrenheit.value) - 32) * 5 / 9;
    celcius.innerText = celcius.value;
  }
      
    


}

function kelvinToCelciusConverter() {

        celcius.value = Number(kelvin.value) - 273.15;
        celcius.innerText = celcius.value;
    

}










// celcius input
celcius.addEventListener("input", celciusToFahrenheitConverter);
celcius.addEventListener("input", kelvinHandler);

// fahrenheit input
fahrenheit.addEventListener("input", fahrenheitToCelciusConverter);
fahrenheit.addEventListener("input", kelvinHandler);

// kelvin input
kelvin.addEventListener("input", kelvinToCelciusConverter);
kelvin.addEventListener("input", celciusToFahrenheitConverter);