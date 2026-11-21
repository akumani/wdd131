const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const windChillOutput = document.querySelector('#wind-chill');

const temperature = 29;
const windSpeed = 8;

currentYear.textContent = new Date().getFullYear();
const modifiedDate = new Date(document.lastModified);
lastModified.dateTime = modifiedDate.toISOString();
lastModified.textContent = document.lastModified;

if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillOutput.textContent = 'N/A';
}

function calculateWindChill(temperatureCelsius, windSpeedKmh) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * windSpeedKmh ** 0.16 + 0.3965 * temperatureCelsius * windSpeedKmh ** 0.16;
}
