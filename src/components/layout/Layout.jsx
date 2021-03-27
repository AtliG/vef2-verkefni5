import React from 'react';
// TODO sækja Sass

export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
	return (
		<>
			<header>
				<h1>
					Rúv fréttir
				</h1>
			</header>
			<main>{children}</main>
			<nav>
				<hr></hr>
				<p>Fréttir frá <a href="https://www.ruv.is/">Rúv</a></p>
			</nav>
		</>
	)
}
