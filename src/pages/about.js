import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeaderWithAPILink from "../components/HeaderWithAPILink"; // Ensure the correct import path
import Footer from '../components/Footer';

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
            <div className="container mx-auto mt-4 p-5 bg-violet-500 rounded-lg shadow-md"> {/* Changed the background color to violet */}
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
                            Hello&excl; I&apos;m Trincell&comma; a passionate developer and lifelong learner&period; I have a strong background in web development and love creating interactive and dynamic web applications&period; When I&apos;m not coding&comma; you can find me exploring new technologies&comma; reading books&comma; or cooking something delicious&period;
                        </p>
                        <h2 className="text-2xl font-bold mb-2">Achievements</h2>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Created a responsive e&#45;commerce website with React and Node&period;js</li>
                            <li>Developed a real-time chat application using AI</li>
                            <li>Created sites for nonprofits</li>
                            <li>Completed a Full&#45;Stack Web Development Bootcamp</li>
                            <li>Mentored junior developers in coding and problem&#45;solving</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-2">About the App</h2>
                    <p className="mb-4">
                        The Allergy Weather Preparedness App is designed to help users stay informed about weather conditions and allergens in their area&period; By using real&#45;time data and intuitive design&comma; the app provides valuable information that helps users make informed decisions about their health and activities&period;
                    </p>
                    <p className="mb-2">Key features include&colon;</p>
                    <ul className="list-disc pl-5">
                        <li>Real&#45;time weather updates</li>
                        <li>Allergy forecasts and alerts</li>
                        <li>Personalized weather and allergy notifications</li>
                        <li>Tips and resources for managing allergies</li>
                    </ul>
                </div>
            </div>
            <Footer /> {/* Add Footer component at the bottom */}
        </>
    );
}
