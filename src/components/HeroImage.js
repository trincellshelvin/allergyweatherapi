import Image from 'next/image';

const HeroImage = () => {
    return (
        <div className="relative w-full h-96 p-5"> 
            <Image
                src="/Primar.png" 
                alt="Hero Image"
                layout="fill" 
                objectFit="cover" 
                className="hero-image"
            />
        </div>
    );
};

export default HeroImage;
