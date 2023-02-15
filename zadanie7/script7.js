
document.getElementById('add').addEventListener('click', () => addLocation());
document.getElementById('remove').addEventListener('click', () => removeLocation());

function pullWeather() {
    const locations = JSON.parse(localStorage.getItem("locations")) || [];

    for(let i = 0;i<locations.length;i++) {
        postRequestAndCreateDiv(locations[i]);
    }

}

pullWeather()

async function postRequestAndCreateDiv(location) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=ee6edccd4af1923f2d719c8687bfffe3";
    fetch(url)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            let temp = data["main"].temp;
            let humidity = data["main"].humidity;
            let icon = data.weather[0].icon;
            const newDiv = document.createElement("div")
            newDiv.className = "panel"
            newDiv.innerHTML =  "<p> miasto : "+ location +"</p><p> temperatura : " + temp + "</p><p> wilgotnosc : " + humidity + "</p>";
            const newImg = document.createElement("img");
            newImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            newDiv.appendChild(newImg);
            document.getElementById("wheather").appendChild(newDiv);
        })
}

function addLocation() {
    const locations = JSON.parse(localStorage.getItem("locations")) || [];
    let place = document.getElementById('place').value;
    if(place.length>0) {
        locations.push(place);
        localStorage.setItem('locations',JSON.stringify(locations));
    } else {
        alert("podano nieprawidlowa wartosc");
    }
    window.location.reload();
}

function removeLocation() {
    const locations = JSON.parse(localStorage.getItem("locations")) || [];
    let place = document.getElementById('place').value;
    let index = locations.indexOf(place);
    if(index !== -1) {
        locations.splice(index,1);
        localStorage.setItem('locations',JSON.stringify(locations));
    }
    window.location.reload();
}