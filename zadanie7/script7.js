let locations = []

document.getElementById('add').addEventListener('click', () => addLocation());
document.getElementById('remove').addEventListener('click', () => removeLocation());

// fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ee6edccd4af1923f2d719c8687bfffe3", {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
// }).then(res => {
//     alert(res);
// });

for(let i = 0;i<locations.length;i++) {
    // fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=", {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    // }).then(res => {
    //     alert(res);
    // });
}

function addLocation() {
    let place = document.getElementById('place').value;
    if(place.length>0) {
        locations.push(place);
    } else {
        alert("podano nieprawidlowa wartosc");
    }
}

function removeLocation() {
    let place = document.getElementById('place').value;
    let index = locations.indexOf(place);
    if(index !== -1) {
        locations.splice(index,1);
    }
    alert(locations.toString());
}