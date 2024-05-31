function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    const resultDiv = document.getElementById('fahrenheit-result');
    resultDiv.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
