import React from 'react';
import { createGlobalStyle } 		from 'styled-components';
import Apresentation from '../components/Apresentation';
import Projects from '../components/Projects';


// Default style configuration
const GlobalStyle = createGlobalStyle`
	html {
		height: 100vh;
	}

	body {
		margin: 0;
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;
		background: #1f2833;
		color: #c5c6c7;
		border-top: 3px solid #45a29e;
	}
`;

const Home = () => {
	return (
		<>
			<GlobalStyle />
			<Apresentation />
			<Projects />
		</>
	);
};

export default Home;
