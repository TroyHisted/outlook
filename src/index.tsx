import { createRoot } from 'react-dom/client';
import Header from './header/Header';
import Routes from './Routes';
import Footer from './footer/Footer';
import '@picocss/pico';
import './icon.css';
import './style.css';

function App() {
	return (
		<main className="container">
			<Header />
			<Routes />
			<Footer />
		</main>
	);
}

const root = createRoot(document.body);
root.render(<App />);
