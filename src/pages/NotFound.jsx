import { NavLink } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

export function NotFound() {
  // TODO útfæra 404 síðu
	return (
		<>
		<h2>Síða fannst ekki</h2>
		<b>
			<NavLink to="/">Til baka</NavLink> 
		</b>
		</>
	)
}
