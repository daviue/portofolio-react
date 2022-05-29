import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';


const Table = styled.table`
    width: 95%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`;

const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: center;
    width: auto;
`;


const Grid = (props: any): JSX.Element => {
	const onDelete = (id: number) => {
		const newItems = props.itens.filter((item: any) => item.id !== id);
		props.setItens(newItems);
		localStorage.setItem('transactions', JSON.stringify(newItems));
	};

	return (
		<Table>
			<thead>
				<Th>Descrição</Th>
				<Th>Valor</Th>
				<Th>Tipo</Th>
				<Th></Th>
			</thead>
			<tbody>
				{
					props?.itens?.map((item: any, index: number) => (
						<GridItem key={index} item={item} onDelete={onDelete}/>
					))
				}
			</tbody>
		</Table>
	);
};

export default Grid;
