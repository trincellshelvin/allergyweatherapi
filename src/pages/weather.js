import WeatherForecast from '../components/WeatherForecast';

export default function Home() {
    return (
        <div>
            <h1>Allergy Weather Preparedness</h1>
            <WeatherForecast city="Tokyo" /> {/* Pass the desired city as a prop */}
            
        </div>
    );
}

