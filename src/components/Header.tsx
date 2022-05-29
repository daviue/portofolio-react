import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 150px;
    text-align: center;
    background: #3b945e;
`;

const TitleHeader = styled.h1`
    
`;

const Title = styled.div`
    padding-top: 20px;
    color: #fff;
`;


const Header = (): JSX.Element => {
	return (
		<Container>
			<TitleHeader>
				<Title>Controle Financeiro</Title>
			</TitleHeader>
		</Container>
	);
};

export default Header;
