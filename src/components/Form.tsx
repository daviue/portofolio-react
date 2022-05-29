import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';


const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 95%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;
    @media (max-width: 750px) {
        display: grid;
    }
`;

const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`;

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #3b945e;
`;


const Form = (props: any): JSX.Element => {
	const [desc, setDesc] = useState('');
	const [amount, setAmount] = useState('');
	const [isExpense, setExpense] = useState(false);

	const generateId = () => Math.round(Math.random() * 1000);

	const handleSave = () => {
		if (!desc || !amount) {
			alert('Informe a descrição e o valor!');
			return;
		} else if ((amount as any) <= 0) {
			alert('Informe um valor positivo!');
			return;
		}

		const transaction = {
			id: generateId(),
			desc: desc,
			amount: amount,
			expense: isExpense,
		};

		props.handleAdd(transaction);

		setDesc('');
		setAmount('');
	};

	return (
		<>
			<Container>
				<InputContent>
					<label>Descrição</label>
					<Input
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</InputContent>
				<InputContent>
					<label>Valor</label>
					<Input
						value={amount}
						type='number'
						onChange={(e) => setAmount((e.target.value as any))}
					/>
				</InputContent>
				<RadioGroup>
					<Input
						defaultChecked
						type='radio'
						id='rIncome'
						name='group1'
						onChange={() => setExpense(!isExpense)}
					/>
					<label htmlFor='rIncome'>Entrada</label>
					<Input
						type='radio'
						id='rExpenses'
						name='group1'
						onChange={() => setExpense(!isExpense)}
					/>
					<label htmlFor='rExpenses'>Saída</label>
				</RadioGroup>
				<Button onClick={handleSave}>Adicionar</Button>
			</Container>
			<Grid itens={props.transactions} setItens={props.setTransactions}/>
		</>
	);
};

export default Form;
