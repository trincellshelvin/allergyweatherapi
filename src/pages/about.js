import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeaderWithAPILink from "../components/HeaderWithAPILink"; // Ensure the correct import path

export default function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Learn more about me" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderWithAPILink /> {/* Add HeaderWithAPILink at the top */}
            <div className="container mx-auto mt-4 p-5 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-5">About Me</h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <Image
                            src="/aboutme.png" // Ensure this path is correct
                            alt="About Me"
                            width={300}
                            height={300}
                            className="rounded-full mx-auto"
                        />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                        <p className="mb-4">
                            Hello! I'm Trincell, a passionate developer and lifelong learner. I have a strong background in web development and love creating interactive and dynamic web applications. When I'm not coding, you can find me exploring new technologies, reading books, or cooking something delicious.
                        </p>
                        <h2 className="text-2xl font-bold mb-2">Achievements</h2>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Created a responsive e-commerce website with React and Node.js</li>
                            <li>Developed a real-time chat application using AI</li>
                            <li>Created sites for nonprofits</li>
                            <li>Completed a Full-Stack Web Development Bootcamp</li>
                            <li>Mentored junior developers in coding and problem-solving</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-2">About the App</h2>
                    <p className="mb-4">
                        The Allergy Weather Preparedness App is designed to help users stay informed about weather conditions and allergens in their area. By using real-time data and intuitive design, the app provides valuable information that helps users make informed decisions about their health and activities.
                    </p>
                    <p className="mb-2">Key features include:</p>
                    <ul className="list-disc pl-5">
                        <li>Real-time weather updates</li>
                        <li>Allergy forecasts and alerts</li>
                        <li>Personalized weather and allergy notifications</li>
                        <li>Tips and resources for managing allergies</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
