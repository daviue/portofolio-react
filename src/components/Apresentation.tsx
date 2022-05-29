import React from 'react';
import styled from 'styled-components';
import daviue from '../sources/davi.jpg';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';


const ApresentationContainer = styled.div`
	margin: 1rem auto 0;
	width: 90%;
	height: 80vh;
	display: flex;
	justify-content: space-around;

	@media (max-width: 800px) {
		flex-direction: column-reverse;
		height: 100%;
	}
`;

const ApresentationText = styled.div`
	padding: 0 1rem;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 2.5rem;
	}

	span {
		font-size: 1.2rem;
		padding: 0.5rem 0;
		text-indent: .1rem;
	}

	@media (max-width: 800px) {
		width: 100%;
		height: 50%;
		padding: 0;
	}
`;

const ApresentationMedia = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;

	img {
		width: auto;
		height: 45%;
		border-radius: 50%;
		border: 3px solid #45a29e;
		box-shadow: 0 0 10px #45a29e;
	}

	@media (max-width: 800px) {
		width: 100%;

		img {
			width: 75%;
		}
	}
`;

const SocialMediaContainer = styled.div`
    display: flex;
	justify-content: center;
`;

const SocialMediaButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 3rem 2rem 0;
    width: 3rem;
    height: 3rem;
    text-decoration: none;
    border-radius: 0.5rem;
    color: #0b0c10;
    background: #c5c6c7;
    font-size: 2.5rem;
    transition: .2s ease-in-out;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.75);

    &:hover {
        color: #45a29e;
        background: #FFF;
    }

	@media (max-width: 1100px) {
		margin: 2rem 1rem 0;
	};

	@media (max-width: 600px) {
		margin: 1rem .5rem;
		width: 2rem;
    	height: 2rem;
	};
`;

export default function Apresentation(): JSX.Element {
	return (
		<ApresentationContainer>
			<ApresentationText>
				<h1>Opa, eu sou Davi Rodrigues</h1>
				<span>Tenho 19 anos e sou Desenvolvedor, cursando atualmente Bacharelado em Sistemas de Informação e tendo contato com programação a cerca de 5 anos.</span>
				<span>Tenho trabalhado com desenvolvimento e manutenção de aplicações web, utilizando de tecnologias como Typescript, Node e React e metodologias ágeis como Scrum e Kanban.</span>
				<SocialMediaContainer>
					<SocialMediaButton href='https://www.linkedin.com/in/rodriguesdavi/' target='_blank'>
						<FaLinkedin />
					</SocialMediaButton>
					<SocialMediaButton href='https://github.com/daviue' target='_blank'>
						<FaGithub />
					</SocialMediaButton>
					<SocialMediaButton href='mailto:daviue25@gmail.com'>
						<FaEnvelope />
					</SocialMediaButton>
					<SocialMediaButton href='https://www.instagram.com/daviuee' target='_blank'>
						<FaInstagram />
					</SocialMediaButton>
				</SocialMediaContainer>
			</ApresentationText>
			<ApresentationMedia>
				<img src={daviue} alt='Davi' />
			</ApresentationMedia>
		</ApresentationContainer>
	);
};
