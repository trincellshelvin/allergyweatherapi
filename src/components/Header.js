import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold">Allergy Weather Preparedness App</h1>
            <nav className="space-x-4">
                <Link href="/api-page" className="text-blue-500 hover:text-blue-700">
                    API Page
                </Link>
                <Link href="/about" className="text-blue-500 hover:text-blue-700">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
