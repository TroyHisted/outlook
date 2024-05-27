import { Route, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Weather from './page/weather/Weather';
import News from './page/news/News';
import Sports from './page/sports/Sports';
import Home from './page/home/Home';
import NotFound from './page/not-found/NotFound';

const App = () => {
	const [location] = useHashLocation();
	return (
		<Switch location={location}>
			<Route path="/weather" component={Weather} />
			<Route path="/weather/:zip" component={Weather} />
			<Route path="/news" component={News} />
			<Route path="/sports" component={Sports} />
			<Route path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default App;
