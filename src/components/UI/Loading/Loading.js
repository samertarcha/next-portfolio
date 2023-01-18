import './Loading.scss';

import React from 'react';

const Loading = () => {
	return (
		<div className='loading'>
			<div className='loading__message'>
				<p className='loading__message-text'>Sending message</p>
				<div className='loading__message-dots'></div>
			</div>
		</div>
	);
};

export default Loading;
