import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';


const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    margin-top: -50px;
    justify-content: space-around;

    @media (max-width: 400px) {
        flex-direction: column;
    };
`;


const Resume = (props: any): JSX.Element => {
	return (
		<Container>
			<ResumeItem title='Entradas' value={props.income} Icon={ FaRegArrowAltCircleUp }/>
			<ResumeItem title='Saídas' value={props.expense} Icon={ FaRegArrowAltCircleDown }/>
			<ResumeItem title='Total' value={props.total} Icon={ FaDollarSign }/>
		</Container>
	);
};

export default Resume;
