// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Ensure complete import

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/splash');
  }, []);

  return null; // Keep only one return statement
}
