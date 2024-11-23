import WeatherForecast from '../components/WeatherForecast';
import HeroImage from '../components/HeroImage';
import Header from '../components/HeaderWithHomeLink';

export default function ApiPage() {
    return (
        <div className="flex flex-col items-center bg-violet-500 text-center p-5 min-h-screen">
            <Header /> {/* Add the Header component */}
            <div className="w-full max-w-2xl mt-10" style={{ marginTop: '5%' }}>
            <HeroImage /> {/* Add the HeroImage component */}
                <h1 className="text-2xl font-bold mb-5">Enter Details Below for Air Quality Data</h1>
                <WeatherForecast />
            
            </div>
        </div>
    );
}

