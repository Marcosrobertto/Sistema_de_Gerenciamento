import React, { Component } from "react";

import { Container, Banner, ContentBanner, TopHome, ButtonExit, Sair, Tittle, IconExit, SubTittle, BackgroundText, Text, SectionRedirect, WrapperCards, CardRedirect, CardImg, StyledLink,BoxArrowUpRightIcon } from "./styles"

import imgRedirectSalas from '../../Imgs/rooms.png'
import imgRedirectEqp from '../../Imgs/equipaments.png'

import Footer from '../Footer'



export default class BodyHome extends Component {

    constructor(props){
        super(props);
        this.state = {


        }

    }

    Logout = () => {

        localStorage.setItem('tokenuserup', null)
        

    }

    render() {

        return (

            <Container>

                <Banner>
                    <ContentBanner>
                        <TopHome>
                            <Tittle>Sistema de Gerenciamento</Tittle>
                            <ButtonExit onClick={this.Logout} to='/Login'>
                                <Sair> LogOut <IconExit/> </Sair>
                                
                            </ButtonExit>
                        </TopHome>
                        <SubTittle>Projeto Escola SENAI de Informática</SubTittle>
                        <BackgroundText>
                            <Text>
                                Este projeto tem por objetivo solucionar o problema de uma escola que em suas atividades realizam diversas vezes o remanejamento de equipamentos para as suas respectivas salas de acordo à necessidade dos colaboradores, sendo assim houve uma oportunidade de testar o conehcimento, entrosamento, planejamento e diversas outras competências dos alunos que estão se formando para solucionar o problema desta escola, viabilizando tanto de maneira financeira quanto de maneira experimental para adiconar um portifólio para os alunos responsáveis da criação de tal solução.
                            </Text>
                            <Text>
                                O projeto será em equipe de forma totalmente livre para que os alunos optem por utilizar as suas linguagens e tecnologias que apredenram por conta e ao longo do curso para que as soluções sejam mais inovadoras além de ser uma oportunidade para que os alunos demonstrem os conhecimentos adquiridos em oportunidades de carreira profissional ou estudos individuais.
                            </Text>
                            <Text>
                                As equipes foram decididas aleatoriamente para que além de praticarem suas habilidades técnicas, praticar também suas capacidades de adaptação em time e flexibilidade para atuar em todas as frentes do projeto.
                            </Text>
                        </BackgroundText>
                    </ContentBanner>
                </Banner>

                <SectionRedirect>

                    <SubTittle>Visualização</SubTittle>

                    <WrapperCards>
                        <CardRedirect>
                            <CardImg src={imgRedirectSalas} />
                            <StyledLink to='/Salas'> Ver Salas
                                <BoxArrowUpRightIcon/>
                            </StyledLink>
                        </CardRedirect>

                        <CardRedirect>
                            <CardImg src={imgRedirectEqp} />
                            <StyledLink to='/Equipamentos'> Ver Equipamentos 
                                <BoxArrowUpRightIcon/>
                            </StyledLink>
                        </CardRedirect>
                    </WrapperCards>
                </SectionRedirect>
                <Footer/>
            </Container>
        )

    }
}