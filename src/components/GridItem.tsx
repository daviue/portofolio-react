import React from 'react';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';


const Td = styled.td`
    padding-top: 15px;
    text-align: center;
    word-break: break-all;
    svg {
        width: 18px;
        height: 18px;
    }
`;


const GridItem = (props: any): JSX.Element => {
	return (
		<tr>
			<Td>{props.item.desc}</Td>
			<Td>R$ {props.item.amount}</Td>
			<Td>
				{
					props.item.expense ? (
						<FaRegArrowAltCircleDown color='red' />
					) : (
						<FaRegArrowAltCircleUp color='green' />
					)
				}
			</Td>
			<Td>
				<FaTrash onClick={() => props.onDelete(props.item.id)} />
			</Td>
		</tr>
	);
};

export default GridItem;
