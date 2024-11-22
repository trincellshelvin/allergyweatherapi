import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS first
import '@/styles/globals.css'; // Import your global CSS

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

