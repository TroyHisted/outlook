import { createRoot } from 'react-dom/client';
import Header from './header/Header';
import WeatherPage from './page/weather/WeatherPage';
import Footer from './footer/Footer';
import '@picocss/pico';
import './icon.css';
import './style.css';

function App() {
	return (
		<>
			<main className="container">
				<Header />
				<WeatherPage />
				<Footer />
			</main>
		</>
	);
}

const root = createRoot(document.body);
root.render(<App />);
