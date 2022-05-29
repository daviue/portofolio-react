import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    @media (max-width: 750px) {
        width: 20%;
        p {
            font-size: 12px;
        }
        span {
            font-size: 20px;
        }
        svg {
            display: none;
        }
    }

    @media (max-width: 400px) {
        padding: 0;
        width: 95%;
        margin: 0 auto;
        box-shadow: 0px 0px 5px #ccc;
    };
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;
    svg {
        width: 25px;
        height: 25px;
    }

    @media (max-width: 400px) {
        width: 50%;
        margin: 5px auto;
    };
`;

const HeaderTitle = styled.p`
    font-size: 1.2rem;

    @media (max-width: 400px) {
        font-size: 1rem;
    };
`;

const Total = styled.p`
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 400px) {
        font-size: 1rem;
    };
`;


const ResumeItem = ( props: any ): JSX.Element => {
	return (
		<Container>
			<Header>
				<HeaderTitle>{props.title}</HeaderTitle>
				<props.Icon />
			</Header>
			<Total>{props.value}</Total>
		</Container>
	);
};

export default ResumeItem;
