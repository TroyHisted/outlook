import { Router, Route } from 'wouter';
import {
	useLocationProperty,
	navigate,
	BaseLocationHook,
} from 'wouter/use-location';
import WeatherPage from './page/weather/WeatherPage';
import News from './page/news/News';
import Sports from './page/sports/Sports';
import Location from './page/location/Location';

const hashLocation = () => window.location.hash.replace(/^#/, '') || '/';
const hashNavigate = (to: string) => navigate('#' + to);
const useHashLocation: BaseLocationHook = () => {
	const location = useLocationProperty(hashLocation);
	return [location, hashNavigate];
};

const App = () => (
	<Router hook={useHashLocation}>
		<Route path="/weather" component={WeatherPage} />
		<Route path="/news" component={News} />
		<Route path="/sports" component={Sports} />
		<Route path="" component={Location} />
	</Router>
);

export default App;
