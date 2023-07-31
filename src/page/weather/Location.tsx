import React from 'react';

export default () => (
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
				<button>Use Current Location</button>
			</div>
		</div>
	</article>
);
