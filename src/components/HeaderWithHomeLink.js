import Link from 'next/link';

const HeaderWithHomeLink = () => {
    return (
        <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold">Allergy Weather Preparedness App</h1>
            <nav className="space-x-4">
                <Link href="/splash" className="text-blue-500 hover:text-blue-700">
                    Home
                </Link>
                <Link href="/about" className="text-blue-500 hover:text-blue-700">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default HeaderWithHomeLink;
