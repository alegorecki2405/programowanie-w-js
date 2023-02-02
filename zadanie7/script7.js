let locations = []

fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
}).then(res => {
    alert(res);
});

for(let i = 0;i<locations.length;i++) {
    // fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=", {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    // }).then(res => {
    //     alert(res);
    // });
}