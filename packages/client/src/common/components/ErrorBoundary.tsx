import * as React from 'react';
import { BasicReactProps } from '../types/BasicReactProps';

interface ErrorBoundaryState {
	error: any
}

export class ErrorBoundary extends React.Component<BasicReactProps, ErrorBoundaryState> {

	state = {
		error: undefined
	}

	componentDidCatch(error: any, info: any) {
		this.setState({
			error
		});
		console.error(error);
		console.error(info);
	}

	render() {
		if(this.state.error) {
			return <h1>{this.state.error}</h1>
		}

		return this.props.children;
	}

}

export default ErrorBoundary;