import React, {Component} from 'react'

import { Container, ContentFooter, LogoFooter, TittleFooter, Integrant, TextFooter } from './styles'


import logo from '../../Imgs/logo.png'

export default class Footer extends Component {

    render(){
        return(

            <Container>

                <ContentFooter>
                    <LogoFooter src={logo}/>
                    <TittleFooter>Time</TittleFooter>
                    <Integrant>Matheus Strilicherk</Integrant>
                    <Integrant>Vinicius Silva de Jesus</Integrant>
                    <Integrant>Marco</Integrant>
                    <Integrant>Ruan</Integrant>
                    <Integrant>Marcos Roberto</Integrant>
                    <TextFooter>Todos os direitos reservados à IANES LTDA</TextFooter>
                </ContentFooter>

            </Container>

        )

    }

}