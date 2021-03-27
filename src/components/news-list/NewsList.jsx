import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { News } from '../news/News';

import s from './NewsList.module.scss';;

const apiUrl = process.env.REACT_APP_API_URL;

NewsList.propTypes = {
	id: PropTypes.string,
	url: PropTypes.string,
	title: PropTypes.string,
}

export function NewsList({id, title}) {
  // TODO sækja yfirlit fréttaflokka
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

	const url =  `${apiUrl}${id}`;

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);

			let json;

			try {
				const result = await fetch(url);

				if (!result.ok) {
					throw new Error('result not ok');
				}

				json = await result.json();
			} catch (e) {
				setError('Gat ekki sótt gögn.');
				return;
			} finally {
				setLoading(false);
			}

			setData(json);
		}

		fetchData();

	}, [url]);

	if (error) {
		return (
			<section className={s.newsList__noData}>
				<p>
					Villa kom upp: {error} 
				</p> 
			</section>
		);
	}

	if (loading) {
		return (
			<section className={s.newsList__noData}>
				<p className={s.newsList__noData}>
					Sæki gögn... 
				</p>
			</section>
		);
	}

	const news = data.items || [];

	const displayNews = news.slice(0,5);

	return (
		<section className={s.newsList}>
			<h2>
				{title}
			</h2>
			<ul className={s.newsList__list}>
				{displayNews.length > 0 && displayNews.map((article, i) => {
					const {title, link } = article;
					return (
						<News
							key={i}
							title={title}
							link={link}
						/>
					)
				})}
			</ul>
			<div className={s.newsList__all}>
				<a href={id} className={s.newsList__all__nav}>
					Allar fréttir
				</a>
			</div>
		</section>
	);
}
