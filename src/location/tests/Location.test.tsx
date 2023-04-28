import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Location from '../Location';
import LocationView from '../LocationView';

jest.mock('../LocationView');

it('renders with defaults', () => {
	const component = <Location />;
	const container = document.createElement('div');
	document.body.appendChild(container);

	const root = createRoot(container);

	act(() => root.render(component));
	expect(LocationView).toHaveBeenCalledWith({
		locationDescription: 'unknown',
		latitude: 0,
		longitude: 0,
		getLocation: expect.any(Function),
	});
});
