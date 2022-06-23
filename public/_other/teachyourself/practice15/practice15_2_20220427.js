const container = document.querySelector("#container");
const target = document.querySelector("#target");

function setEvents(element) {
    const datasets = Object.entries(element.dataset);
    for(const [eventType, color] of datasets) {
        element.addEventListener( eventType, () => {
            element.style.background = color;
        });
    }
}

setEvents(container);
setEvents(target);
