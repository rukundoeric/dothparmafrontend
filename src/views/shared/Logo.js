/* eslint-disable react/prop-types */
import React from 'react';
import { logo } from '../../assets';

const Logo = ({width, height}) => {
	return (
		<img src={logo} style={{width, height}} className="app-logo" alt="logo" />
	);
};

Logo.defaultProps = {
	with: 60,
	height: 60,
};

export default Logo;
