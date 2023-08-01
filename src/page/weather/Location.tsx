import { LoadingStatus } from './types/LoadingStatus';

export default (props: {
	getLocation: () => void;
	loadingStatus: LoadingStatus;
	error?: string;
}) => (
	<article>
		<div className="grid">
			<form>
				<input
					type="search"
					id="location"
					name="location"
					placeholder="Lookup by Zip / City"
				/>
			</form>
			<div>
				<button
					aria-busy={
						props.loadingStatus === 'Loading' ? 'true' : 'false'
					}
					onClick={props.getLocation}
				>
					Use Current Location
				</button>
			</div>
		</div>
		{props.error && <p>{props.error}</p>}
	</article>
);
