import React from 'react';
import { BrowserRouter as Router, Route, Switch } 	from 'react-router-dom';
import Home from '../../pages/Home';
import Quotes from '../../pages/Quotes';
import FinancialControl from '../../pages/FinancialControl';


const Routes = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' 		component={Home} />
				<Route path='/quotes' 		component={Quotes} />
				<Route path='/financial' 	component={FinancialControl} />
				<Route path='*' 			component={Home} />
			</Switch>
		</Router>
	);
};

export default Routes;
