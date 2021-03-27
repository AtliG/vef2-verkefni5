import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { News } from '../components/news/News';
import {NotFound} from './NotFound';

import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;


export function NewsPage() {
  // TODO útfæra fréttasíðu
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
	const { id } = useParams();


	const validRoutes = ['allar', 'innlent', 'erlent', 'ithrottir', 'menning'];

	const url = `${apiUrl}${id}`;
	
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

	}, []);

	if (validRoutes.indexOf(id) < 0) {
		return (
			<NotFound/>
		)
	}

	if (error) {
		return (
			<div>
				<p> Villa kom upp: {error} </p> 
				<div className={s.news__back}>
					<a href="/" className={s.news__back__nav}>
						Til baka
					</a>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<p> Sæki gögn... </p>
		);
	}


	const news = data.items || [];
	const title = data.title;

	return (
		<div className={s.news}>
			<h2>
				{title}
			</h2>
			<ul className={s.news__list}>
				{news.length > 0 && news.map((article, i) => {
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
			<div className={s.news__back}>
				<a href="/" className={s.news__back__nav}>
					Til baka
				</a>
			</div>
		</div>
	);
}
