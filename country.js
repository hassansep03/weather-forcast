document.addEventListener('DOMContentLoaded', function() {
    const countryInfoDiv = document.getElementById('country-info');
    const country = localStorage.getItem('country');
    
    if (country) {
        countryInfoDiv.innerText = `Country: ${country}`;
    } else {
        countryInfoDiv.innerText = 'No country information available.';
    }
});
