import { useRouter } from 'next/router';
import Greeting from '../components/greeting';
import HeroImage from '../components/HeroImage';
import PreparednessResources from '../components/PreparednessResources';

export default function Splash() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/api-page'); // Adjust the path if your API page is named differently
  };

  return (
    <div className="splash-container">
      <Greeting />
      <HeroImage />
      <p>Your go-to source for weather and allergy information.</p>
      <button onClick={handleButtonClick} className="splash-button">
        Get Started
      </button>
      <PreparednessResources />

      {/* Add some basic styling */}
      <style jsx>{`
        .splash-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f8ff;
          text-align: center;
          padding: 20px;
        }

        .hero-image-container {
          width: 100%;
          max-width: 800px;
          margin-bottom: 20px;
        }

        .splash-button {
          padding: 10px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .splash-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
