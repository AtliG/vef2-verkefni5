import React from 'react';
// TODO sækja Sass
import s from './Layout.module.scss';

export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
	return (
		<div className={s.layout}>
			<header className={s.layout__header}>
				<h1>
					Rúv fréttir
				</h1>
			</header>
			<main className={s.layout__main}>
				{children}
			</main>
			<hr></hr>
			<footer className={s.layout__footer}>
				<p>Fréttir frá <a href="https://www.ruv.is/">RÚV</a>.</p>
			</footer>
		</div>
	)
}
