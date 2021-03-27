import { useEffect, useState } from 'react';
import { NewsList } from '../components/news-list/NewsList';;

const apiUrl = process.env.REACT_APP_API_URL;

export function Index() {
  // TODO útfæra yfirlitssíðu
	// Set states and props.
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);

			let json;

			const url = apiUrl;
			
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

	if (error) {
		return (
			<p> Villa kom upp: {error} </p> 
		);
	}

	if (loading) {
		return (
			<p> Sæki gögn... </p>
		);
	}

	const newsGroups = data || [];
	
	return (
		<div>
			{newsGroups.length > 0 &&  newsGroups.map((group,i) => {
				const { id, title } = group;
				return (
					<NewsList
						key={i}
						id={id}
						title={title}
					/>
				)
			})}
		</div>
	);
}
