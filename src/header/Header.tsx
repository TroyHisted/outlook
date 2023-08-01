export default () => {
	const formattedDate = new Date().toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<header>
			<nav>
				<ul>
					<li>
						<strong>
							<a href="#">
								<img
									src="favicon.ico"
									alt="Logo containing the letters O and L"
								/>
							</a>
						</strong>
					</li>
					<li>My Today</li>
				</ul>
				<ul>
					<li>
						<a href="#/news">News</a>
					</li>
					<li>
						<a href="#/weather">Weather</a>
					</li>
					<li>
						<a href="#/sports">Sports</a>
					</li>
				</ul>
			</nav>
			<small>{formattedDate}</small>
		</header>
	);
};
