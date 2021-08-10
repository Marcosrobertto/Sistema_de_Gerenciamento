import React, {Component} from 'react'

import {Container, WrapperBody, Register, InputCadastrar, ButtonCadastrar, SubTittle3, FormCadastro, ListSalas, SubTittleLista, FrameList, ItemList, FrameAndar, TextItem, TextSala, TextMetro, FrameContentItems, Data, Icons, IconUpdate, IconDelete } from './styles'
import {Logo} from '../../Components/BodyLogin/styles'

import logo from '../../Imgs/logo.png'

import api from '../../Services/api'

export default class BodySalas extends Component {

    constructor(props){
        super(props);
        this.state = {

            listaSalas : [],
            andar : '',
            nome : '',
            metragem : '',

        }   
    }

    AttState = (campo) => {

        this.setState({

            [campo.target.name] : [campo.target.value]

        })

    }

    BuscarSalas = async () => {

        const response = await api.get('/Salas', {

            headers:{

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }

        });

        if(response.status === 200){

            await this.setState({ listaSalas : response.data })

            console.log(response.data);
            console.log(this.state.listaSalas);

        }
    }
    
    componentDidMount(){
        
        this.BuscarSalas();
        
    }

    render(){

        return(

            <Container>
                <Logo src={logo}/>
                <WrapperBody>

                    <Register>
                        <SubTittle3>Cadastre uma sala</SubTittle3>
                        <FormCadastro onSubmit = {this.CadastrarSala}>
                            <InputCadastrar name='andar' onChange={this.AttState} placeholder='Nº Andar da Sala'/>
                            <InputCadastrar name='nome' onChange={this.AttState} placeholder='Nome'/>
                            <InputCadastrar name='metragem' onChange={this.AttState} placeholder='Metragem (m²)'/>
                            <ButtonCadastrar type='submit'>Cadastrar</ButtonCadastrar>
                        </FormCadastro>
                    </Register>

                    <ListSalas>
                        <SubTittleLista>Salas</SubTittleLista>
                        <FrameList>
                            {

                                this.state.listaSalas.map( sala => {

                                    return (
                                        <ItemList key={sala.idsala}>
                                            <FrameAndar>
                                                <TextItem>{sala.andar}</TextItem>
                                            </FrameAndar>
                                            <FrameContentItems>
                                                <Data>
                                                    <TextSala>{sala.nome}</TextSala>
                                                    <TextMetro>{sala.metragem}</TextMetro>
                                                </Data>
                                                <Icons>
                                                    <IconUpdate/>
                                                    <IconDelete/>
                                                </Icons>
                                            </FrameContentItems>
                                        </ItemList>
                                    )


                                } ) 

                            } 

                        </FrameList>
                    </ListSalas>

                </WrapperBody>
            </Container>

        )

    }

}