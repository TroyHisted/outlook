import { Route, Switch } from 'wouter';
import WeatherPage from './page/weather/WeatherPage';
import News from './page/news/News';
import Sports from './page/sports/Sports';
import Home from './page/home/Home';
import NotFound from './page/not-found/NotFound';
import { useEffect, useState } from 'react';

const getLocationFromHash = () => window.location.hash.replace(/^#/, '') || '/';

const App = () => {
	const [location, setLocation] = useState(getLocationFromHash());

	useEffect(() => {
		const updateLocation = () => {
			setLocation(getLocationFromHash());
		};
		window.addEventListener('hashchange', updateLocation);
		return () => {
			window.removeEventListener('hashchange', updateLocation);
		};
	}, []);

	return (
		<Switch location={location}>
			<Route path="/weather" component={WeatherPage} />
			<Route path="/weather/:zip" component={WeatherPage} />
			<Route path="/news" component={News} />
			<Route path="/sports" component={Sports} />
			<Route path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default App;
