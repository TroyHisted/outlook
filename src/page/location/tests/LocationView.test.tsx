import renderer from 'react-test-renderer';
import LocationView from '../LocationView';

test('renders correctly', () => {
	const tree = renderer
		.create(
			<LocationView
				getLocation={() => {}}
				latitude={25}
				longitude={50}
				locationDescription="Nowhere"
			/>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
