import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './main/components/App';
import * as serviceWorker from './serviceWorker';
import GraphqlProvider from './common/apollo/GraphqlProvider';

import { BasicReactProps } from 'src/common/types/BasicReactProps';

const AppProvider = ({ children } : BasicReactProps) => (
	<React.StrictMode>
		<GraphqlProvider>
			<Router>
				{children}
			</Router>
		</GraphqlProvider>
	</React.StrictMode>
)

const render = (Component: React.FunctionComponent) => ReactDOM.render(
	<AppProvider>
		<Component/>
	</AppProvider>,
	document.getElementById('root')
)

render(App);


if (module.hot) {
	module.hot.accept('./main/components/App', () => {
		const NextApp: React.FunctionComponent = require('./main/components/App').default as React.FunctionComponent;
		render(NextApp);
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
