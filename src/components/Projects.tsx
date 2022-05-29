import React                    from 'react';
import styled                   from 'styled-components';
import quotesProject            from '../sources/quotes_project.jpg';
import financialProject         from '../sources/financial_project.png';
import { useHistory } 		    from 'react-router-dom';


const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10rem;
`;

const TitleProjects = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const ProjectCard = styled.a`
    margin-bottom: 1rem;
    width: 45%;
    text-decoration: none;
    color: #c5c6c7;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border-radius: .5rem;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 95%;
    }
`;

const CardTitle = styled.h2`
    font-size: 1.6rem;
    text-align: center;
`;

const CardText = styled.p`
    font-size: 1rem;
    text-align: center;
`;

const CardImage = styled.img`
    border-radius: .5rem;
`;

const Tecnologies = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Tecnology = styled.span`
    display: flex;
    align-items: center;
    flex-direction: row;
    background: #c5c6c7;
    color: #000;
    padding: .5rem;
    margin: 0 .2rem .2rem 0;
    border-radius: .5rem;
`;

const Projects = (): JSX.Element => {
	const history = useHistory();

	return (
		<Container>
			<TitleProjects>Projetos</TitleProjects>
			<CardsContainer>
				<ProjectCard onClick={() => history.push('/quotes')} >
					<CardTitle>Site de Frases</CardTitle>
					<CardText>Site com frases aleatórias de artistas e bandas do rock.</CardText>
					<CardImage src={quotesProject} alt='Site de Frases' />
					<CardText>Tecnologias utilizadas:</CardText>
					<Tecnologies>
						<Tecnology>React</Tecnology>
						<Tecnology>Typescript</Tecnology>
						<Tecnology>Styled Components</Tecnology>
						<Tecnology>Node</Tecnology>
						<Tecnology>Axios</Tecnology>
						<Tecnology>React Icons</Tecnology>
					</Tecnologies>
				</ProjectCard>
				<ProjectCard onClick={() => history.push('/financial')} >
					<CardTitle>Controle Financeiro</CardTitle>
					<CardText>Site com sistema simples para controle de finanças.</CardText>
					<CardImage src={financialProject} alt='Site de Frases' />
					<CardText>Tecnologias utilizadas:</CardText>
					<Tecnologies>
						<Tecnology>React</Tecnology>
						<Tecnology>Typescript</Tecnology>
						<Tecnology>Styled Components</Tecnology>
						<Tecnology>Node</Tecnology>
						<Tecnology>React Icons</Tecnology>
						<Tecnology>Local Storage</Tecnology>
					</Tecnologies>
				</ProjectCard>
			</CardsContainer>
		</Container>
	);
};

export default Projects;
