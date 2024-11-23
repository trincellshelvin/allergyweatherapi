import WeatherForecast from '../components/WeatherForecast';
import Footer from '../components/Footer'; // Import the Footer component

export default function Home() {
    return (
        <div>
            <h1>Allergy Weather Preparedness</h1>
            <WeatherForecast city="Tokyo" /> {/* Pass the desired city as a prop */}
            <Footer /> {/* Add the Footer component here */}
        </div>
    );
}

