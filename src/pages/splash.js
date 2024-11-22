import { useRouter } from 'next/router';
import Header from '../components/Header'; // Import the Header component
import Greeting from '../components/greeting';
import HeroImage from '../components/HeroImage';
import PreparednessResources from '../components/PreparednessResources';

export default function Splash() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/api-page'); // Adjust the path if your API page is named differently
  };

  return (
    <div className="splash-container flex flex-col items-center bg-violet-500 text-center p-5" style={{ minHeight: '100vh' }}>
      <Header /> {/* Add the Header component */}
      <div className="w-full max-w-2xl mt-10" style={{ marginTop: '5%' }}> {/* Add 5% margin-top */}
        <Greeting />
        <HeroImage />
        <p>Your go-to source for weather and allergy information.</p>
        <button
          onClick={handleButtonClick}
          className="splash-button px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 mb-8">
          Get Started
        </button>
        <div className="p-4 bg-white rounded shadow-md">
          <PreparednessResources />
        </div>
      </div>

      <style jsx>{`
        .splash-container {
          opacity: 0.5; /* Set opacity to 50% */
        }
      `}</style>
    </div>
  );
}
