import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

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
