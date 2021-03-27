import s from './NotFound.module.scss';

export function NotFound() {
  // TODO útfæra 404 síðu
	return (
		<section className={s.notFound}>
			<h2>Síða fannst ekki</h2>
			<div className={s.notFound__back}>
				<a href="/" className={s.notFound__back__nav}>
					Til baka
				</a> 
			</div>
		</section>
	)
}
