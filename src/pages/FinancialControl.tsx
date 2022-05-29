import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';
import Resume from '../components/Resume';


const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Poppins', sans-serif;
		background-color: #222629;
	}
`;


const FinancialControl = (): JSX.Element => {
	const data = localStorage.getItem('transactions');
	const [transactions, setTransactions] = useState(data ? JSON.parse(data) : []);
	const [income, setIncome] = useState('');
	const [expense, setExpense] = useState('');
	const [total, setTotal] = useState('');

	useEffect(() => {
		const amountExpense = transactions
			.filter((item: any) => item.expense)
			.map((transaction: any) => Number(transaction.amount));

		const amountIncome = transactions
			.filter((item: any) => !item.expense)
			.map((transaction: any) => Number(transaction.amount));

		const expense = amountExpense.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0).toFixed(2);
		const income = amountIncome.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0).toFixed(2);
		const total = Math.abs(income - expense).toFixed(2);

		setIncome(`R$ ${income}`);
		setExpense(`R$ ${expense}`);
		setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
	}, [transactions]);

	const handleAdd = (transaction: any): void => {
		const newTransactions = [...transactions, transaction];
		setTransactions(newTransactions);
		localStorage.setItem('transactions', JSON.stringify(newTransactions));
	};

	return (
		<>
			<GlobalStyle />
			<Header />
			<Resume income={income} expense={expense} total={total}/>
			<Form handleAdd={handleAdd} transactions={transactions} setTransactions={setTransactions} />
		</>
	);
};

export default FinancialControl;
