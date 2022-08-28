import React from 'react';
import './ErrorBox.css';

interface Props {
	message: string | null;
	onClick: () => void;
}

function ErrorBox(props: Props) {
	const { message, onClick } = props;
	return (<>
		{
			message !== null &&
			<div className="error" onClick={onClick}>
				{message}
			</div>
		}
	</>);
}

export default ErrorBox;
