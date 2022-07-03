const https = 'https://api.open-meteo.com/v1/forecast?latitude=';
const latitude = 35.6092;
const longitude = 139.7303;
const temperatureMax = 'temperature_2m_max';
const temperatureMin = 'temperature_2m_min';
const apparentTemperatureMax = 'apparent_temperature_max';
const apparentTemperatureMin = 'apparent_temperature_min';
const timezone = 'Asia%2FTokyo';
const link 
    = `${https}${latitude}&longitude=${longitude}&daily=${temperatureMax},${temperatureMin},${apparentTemperatureMax},${apparentTemperatureMin}&timezone=${timezone}`;

async function fetchJson(url: any) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

(async() => {
    const json = await fetchJson(link);
    console.log(json);
})();
