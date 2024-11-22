import Link from 'next/link';

const HeaderWithAPILink = () => {
    return (
        <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold">Allergy Weather Preparedness App</h1>
            <nav className="space-x-4">
                <Link href="/splash">
                    <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Home</span>
                </Link>
                <Link href="/api-page">
                    <span className="text-blue-500 hover:text-blue-700 cursor-pointer">API Page</span>
                </Link>
            </nav>
        </header>
    );
};

export default HeaderWithAPILink;
