document.getElementById('generate').addEventListener('click', async () => {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const state = document.getElementById('state').value.trim();
    const country = document.getElementById('country').value.trim();

    const data = { city, state, country };

    try {
        const response = await fetch('http://localhost:5000/api/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });

        if (!response.ok) {
        throw new Error('Failed to fetch weather data');
        }

        const weatherData = await response.json();

        // Update the HTML with the weather data
        document.getElementById('name').textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        document.getElementById('temp').textContent = weatherData.main.temp;
        document.getElementById('description').textContent = weatherData.weather[0].description;
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching weather data');
    }
});
