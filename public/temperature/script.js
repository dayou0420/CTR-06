const https = 'https://api.open-meteo.com/v1/forecast?latitude=';
const latitude = 34.7006;
const longitude = 135.4957;
const temperatureMax = 'temperature_2m_max';
const temperatureMin = 'temperature_2m_min';
const apparentTemperatureMax = 'apparent_temperature_max';
const apparentTemperatureMin = 'apparent_temperature_min';
const timezone = 'Asia%2FTokyo';
const link = `${https}${latitude}&longitude=${longitude}&daily=${temperatureMax},${temperatureMin},${apparentTemperatureMax},${apparentTemperatureMin}&timezone=${timezone}`;

const nodeOps = {
    qs(selector, scope) {
        return (scope || document).querySelector(selector);
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

(async() => {
    const json = await fetchJson(link);

    const tempData = {
        labels: json.daily.time,
        datasets:
        [
            {
                label: 'Maximum Temperature',
                data: json.daily.temperature_2m_max,
                borderColor: '#dc3545'
            },
            {
                label: 'Minimum Temperature',
                data: json.daily.temperature_2m_min,
                borderColor: '#0d6efd'
            }
        ]
    };

    const body = nodeOps.qs('body');
    new Chart(nodeOps.qs('.temperature', body), {
        type: 'line',
        data: tempData
    });
})();
