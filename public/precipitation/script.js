const https = 'https://api.open-meteo.com/v1/forecast?latitude=';
// const latitude = 34.7006;
// const longitude = 135.4957;
const latitude = 35.6762;
const longitude = 139.6503;
const precipitatin = 'precipitation';
const weathercode = 'weathercode';
const timezone = 'Asia%2FTokyo';
const link = `${https}${latitude}&longitude=${longitude}&hourly=${precipitatin},${weathercode}&timezone=${timezone}`;
const nodeOps = {
    qs(selector, scope) {
        return (scope || document).querySelector(selector);
    },
    html(target, value) {
        target.innerHTML = value;
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

(async() => {
    const json = await fetchJson(link);

    const preciData = {
        labels: json.hourly.time,
        datasets:
        [
            {
                label: 'Precipitation',
                data: json.hourly.precipitation,
                borderColor: '#0dcaf0',
                pointStyle: 'line'
            }
        ]
    };

    const body = nodeOps.qs('body');
    const title = nodeOps.qs('.title', body);

    new Chart(nodeOps.qs('.precipitation', body), {
        type: 'line',
        data: preciData
    });

    const weatherCode = () => {
        if(json.hourly.weathercode[0] === 0) {
            return json.hourly.weathercode[0] + ' Clear(No cloud at any level) ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] < 10) {
            return json.hourly.weathercode[0] + ' Partly cloudy(Scattered or broken) ' + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 20 && json.hourly.weathercode[0] < 30) {
            return json.hourly.weathercode[0] + ' Continuous layer(s) of blowing snow ' + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 30 && json.hourly.weathercode[0] < 40) {
            return json.hourly.weathercode[0] + ' Sandstorm, duststorm, or blowing snow ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 40 && json.hourly.weathercode[0] < 50) {
            return json.hourly.weathercode[0] + ' Fog, thick dust or haze ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 50 && json.hourly.weathercode[0] < 60) {
            return json.hourly.weathercode[0] + ' Drizzle ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 60 && json.hourly.weathercode[0] < 70) {
            return json.hourly.weathercode[0] + ' Rain ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 70 && json.hourly.weathercode[0] < 80) {
           return json.hourly.weathercode[0] + ' Snow, or rain and snow mixed ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else if(json.hourly.weathercode[0] >= 80 && json.hourly.weathercode[0] < 90) {
            return json.hourly.weathercode[0] + ' Shower(s) ' + json.hourly.weathercode[0] + json.hourly.time[0];

        } else {
             return json.hourly.weathercode[0] + ' Thunderstorm(s) ' + json.hourly.weathercode[0] + json.hourly.time[0];
        }
    }
})();
