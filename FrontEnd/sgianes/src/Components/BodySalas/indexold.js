import React, {Component} from 'react'

import {Container, WrapperBody, Register, InputCadastrar, ButtonCadastrar, SubTittle3, FormCadastro, ListSalas, SubTittleLista, FrameList, ItemList, FrameAndar, TextItem, TextSala, TextMetro, FrameContentItems, Data, Icons, IconUpdate, IconDelete } from './styles'
import {Logo} from '../BodyLogin/styles'

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

    AttStateNome = (campo) => {

        this.setState({

            nome : [campo.target.value]

        })

    }
    AttStateAndar = (campo) => {

        this.setState({

            andar : [campo.target.value]

        })

    }
    AttStateMetragem = (campo) => {

        this.setState({

            metragem : [campo.target.value]

            
        })
        
        console.log(this.state.metragem)
    }

    BuscarSalas = async () => {

        const response = await api.get('/Salas', {

            headers:{

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }

        });

        if(response.status === 200){

            await this.setState({ listaSalas : response.data })

            // console.log(response.data);
            // console.log(this.state.listaSalas);

        }
    }

    CadastrarSala = async (event) => {

        await event.preventDefault();

        await console.log('chegou na funcao')

        const response = await api.post('/salas', {
            
            
            nome       :     this.state.nome,
            andar      :     this.state.andar,
            metragem   :     this.state.metragem,
        },
            
        {   
            headers:{

            'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }
        }

        )

        if(response.status === 200){

            await this.BuscarSalas()

        }

        console.log('asdnasdidasghdgadhas');

    }

    // DeletarItem = async (id) => {

    //     const idItem = id;

    //     const response = await api.delete('/salas/'+idItem, {

    //         headers:{

    //             'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

    //         }

    //     })


    //     // if(response === 200){

    //     await this.BuscarSalas()
        
    //     console.log('apagado')
        
    //     // }

    // }
    
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
                            <InputCadastrar name='andar' onChange={this.AttStateAndar} placeholder='N?? Andar da Sala'/>
                            <InputCadastrar name='nome' onChange={this.AttStateNome} placeholder='Nome'/>
                            <InputCadastrar name='metragem' onChange={this.AttStateMetragem} placeholder='Metragem (m??)'/>
                            <ButtonCadastrar type='submit' >Cadastrar</ButtonCadastrar>
                        </FormCadastro>
                    </Register>

                    <ListSalas>
                        <SubTittleLista>Salas</SubTittleLista>
                        <FrameList>
                            {

                                this.state.listaSalas.map( sala => {

                                    return (
                                        <ItemList key={sala.idSala}>
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
                                                    <IconDelete onClick={ () => { this.DeletarItem(sala.idSala) } }/>
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