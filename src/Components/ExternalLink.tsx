import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	href: string;
}

function ExternalLink(props: Props) {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">{ props.children }</a>
	);
}

export default ExternalLink;
