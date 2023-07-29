export default () => (
	<header>
		<nav>
			<ul>
				<li>
					<strong>
						<img
							src="favicon.ico"
							width={48}
							alt="Logo containing the letters O and L"
						/>
					</strong>
				</li>
			</ul>
			<ul>
				<li>
					<a href="#">News</a>
				</li>
				<li>
					<a href="#" role="button">
						Weather
					</a>
				</li>
				<li>
					<a href="#">Sports</a>
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
