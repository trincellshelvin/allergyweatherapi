import Image from 'next/image';

const HeroImage = () => {
    return (
        <div className="hero-image-container">
            <Image
                src="/Primar.png" // Ensure this path points to your hero image file
                alt="Hero Image"
                layout="responsive"
                width={800} // Adjust the width as needed
                height={600} // Adjust the height as needed
                className="hero-image"
            />
        </div>
    );
};

export default HeroImage;
