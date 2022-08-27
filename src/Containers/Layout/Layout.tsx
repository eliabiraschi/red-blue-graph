import React, { ReactNode } from 'react';
import ExternalLink from '../../Components/ExternalLink'
import './Layout.css';

interface Props {
	children: ReactNode;
	title: string;
}

function Layout(props: Props) {
	return (<>
		<header>
			<h1 className="title">{ props.title }</h1>
		</header>
		<main className="App">{ props.children }</main>
		<footer>
			realized by <ExternalLink href="https://www.elia.dev/">Elia Biraschi</ExternalLink><br />
			Project Source Code
		</footer>
	</>);
}

export default Layout;
