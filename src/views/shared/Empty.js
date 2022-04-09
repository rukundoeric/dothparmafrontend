import React from 'react';
import Logo from './Logo';

export default function Empty() {
	return (
		<div className="empty-container text-center">
			<div className="empty-content">
				<Logo />
				<h3 className='text-1 mt-3'> Coming soon 🤞 </h3>
				<small className='text-2'>This feature is still under construction, for more information, please contact developer team.</small>
			</div>
		</div>
	);
}
