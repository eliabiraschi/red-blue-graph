import React, { ReactNode } from 'react';
import ExternalLink from '../../Components/ExternalLink/ExternalLink'
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
			<span>by <ExternalLink href="https://www.elia.dev/">Elia Biraschi</ExternalLink></span>
			<ExternalLink href="https://github.com/eliabiraschi/red-blue-graph">Project Source Code</ExternalLink>
		</footer>
	</>);
}

export default Layout;
