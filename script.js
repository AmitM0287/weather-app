const btn = document.getElementById('weatherBtn');
const cont = document.getElementById('cont');

btn.addEventListener('click', async () => {
    await navigator.geolocation.getCurrentPosition(
        async (loc) => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fba2abf163bf4d968f163043240402&q=${loc.coords.latitude},${loc.coords.longitude}&aqi=yes`);
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.error("Error: ", error);
            }
        }, 
        async (err) => {
            console.log('Error: ', await err);
        }
    );
});
