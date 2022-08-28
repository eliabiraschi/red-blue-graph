import React from 'react';
import type { Result as ResultType } from '../../Modules/Graph';
import './Result.css';

interface Props {
	value: ResultType | null;
}

function Result(props: Props) {
	return (<>
		{
			props.value !== null &&
			<div className={`result ${props.value[0] && props.value[1] ? 'success' : 'fail'}`}>
				The graph entered
				{props.value[0] === false && " is NOT red-blue colorable - analysis aborted"}
				{(props.value[0] === true && props.value[1] === false) && " is at least partially red-blue colorable, but NOT connected - analysis aborted"}
				{(props.value[0] && props.value[1]) && " is red-blue colorable and connected"}
			</div>
		}
	</>);
}

export default Result;
