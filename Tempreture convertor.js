function celsiusToFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit;

}
function fahrenheitTocelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 9/5
    return  celsius;

}

console.log(celsiusToFahrenheit (40));
console.log(fahrenheitTocelsius(104));
