import React from 'react';
import PropTypes from 'prop-types';

import s from './News.module.scss';

News.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
}

export function News({ title = '', link = '' }) {
  // TODO sækja fréttir fyrir flokk
	return (
		<li className={s.news}>
			<a href={link} className={s.news__article}>
				{title}
			</a>
		</li>
	);
}
