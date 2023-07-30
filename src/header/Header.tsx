export default () => (
	<header>
		<nav>
			<ul>
				<li>
					<strong>
						<a href="#">
							<img
								src="favicon.ico"
								width={48}
								alt="Logo containing the letters O and L"
							/>
						</a>
					</strong>
				</li>
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
		<div>
			Outlook -{' '}
			<small>
				February 2<sup>nd</sup> 2020
			</small>
		</div>
	</header>
);
