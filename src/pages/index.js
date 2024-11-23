// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MyComponent from '../components/MyComponent';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/splash');
  }, [router]); // Add router as a dependency

  return null;
}
