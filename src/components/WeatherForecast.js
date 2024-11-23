import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter if you haven't already

require('dotenv').config();

const WeatherForecast = () => {
    const router = useRouter(); // Initialize router if it's used
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load saved data from local storage on mount
        const savedPostalCode = localStorage.getItem('postalCode');
        const savedCountry = localStorage.getItem('country');

        if (savedPostalCode && savedCountry) {
            setPostalCode(savedPostalCode);
            setCountry(savedCountry);
            fetchWeatherData(savedPostalCode, savedCountry);
        }
    }, [router]); // Add router as a dependency if used inside the effect

    const fetchWeatherData = async (postalCode, country) => {
        setLoading(true);
        setError(null);

        const apiKey = process.env.API_KEY;
        const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&postal_code=${postalCode}&country=${country}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setWeatherData(data.data[0]);
            // Save to local storage
            localStorage.setItem('postalCode', postalCode);
            localStorage.setItem('country', country);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData(postalCode, country);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal Code"
                />
                <br />
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                />
                <br />
                <button type="submit">Get Weather</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {weatherData && (
                <div id="airOutput">
                    <p>AQI: {weatherData.aqi}</p>
                    <p>City: {weatherData.city_name}</p>
                    <p>State: {weatherData.state_code}</p>
                    <p>Country: {weatherData.country_code}</p>
                    <p>Postal Code: {postalCode}</p>
                    <p>Temperature: {((weatherData.temp * 9) / 5 + 32).toFixed(2)}°F</p>
                    <p>Weather: {weatherData.weather.description}</p>
                    <p>Wind Speed: {weatherData.wind_spd} m/s</p>
                    <p>Humidity: {weatherData.rh}%</p>
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
