import React, {Component} from 'react'

import { Container, SubTittleEqp, WrapperSelect, Select, InputSelect, Marker, TextSelect, ButtonCadastrarEqp, ContentItemList, WrapperStatus, StatusAtivo, StatusInativo, WrapperNameNumber, Tittles, Values, ValuesMarca, WrapperTittleValue, TittlesNumber, WrapperTypeNumber, SubValue, WrapperIcons, IconDelete, IconUpdate } from './styles';
import { Logo } from '../BodyLogin/styles';
import { WrapperBody, Register, FormCadastro, InputCadastrar, ListSalas, SubTittleLista, FrameList, ItemList, } from '../BodySalas/styles'


import logo from '../../Imgs/logo.png'
// import { AppIndicator } from '@styled-icons/bootstrap';

import api from '../../Services/api'

export default class BodyEquipamentos extends Component{

    constructor(props){
        super(props);
        this.state = {

            listaequips: [],
            checkInative : false,
            checkAtive : false,

        }

    }

    buscarEquipamentos = async () => {

        const response = await api.get('/equipamentos', {

            headers : {

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }

        })

        if(response.status === 200){

            await this.setState({ listaequips : response.data })

            console.log(response.data);

        }

    }

    componentDidMount(){

        this.buscarEquipamentos()

    }

    CheckButtonInative = () => {

        this.setState({ checkInative : true });
        this.setState({ checkAtive : false });
        
    }

    CheckButtonAtive = () => {

        this.setState({ checkInative : false });
        this.setState({ checkAtive : true });
        
    }

    render(){

        return(

            <Container>
                <Logo src={logo}/>
                <WrapperBody>
                    <Register>
                        <SubTittleEqp>Cadastre uma sala</SubTittleEqp>
                        <FormCadastro>
                            <InputCadastrar placeholder='Nome do Equipamento'/>
                            <InputCadastrar placeholder='Marca'/>
                            <InputCadastrar placeholder='Tipo de Equipamento'/>
                            <InputCadastrar placeholder='Nº de Serie'/>
                            <InputCadastrar placeholder='Nº de Patrimônio'/>
                            <InputCadastrar placeholder='Descrição'/>
                            <WrapperSelect>
                                <Select>
                                    <InputSelect
                                        value={this.state.checkAtive}
                                        type='radio'
                                        checked={ this.state.checkAtive === false ? false : true }
                                        onClick={this.CheckButtonAtive}
                                        onChange={this.CheckButtonAtive}
                                    />
                                    <Marker />
                                    <TextSelect> Ativo </TextSelect>
                                </Select>
                                <Select>
                                    <InputSelect 
                                        value={this.state.checkInative}
                                        type='radio'
                                        checked={this.state.checkInative === false ? false : true }
                                        onClick={this.CheckButtonInative}
                                        onChange={this.CheckButtonInative}
                                    />
                                    <Marker />
                                    <TextSelect> Inativo </TextSelect>
                                </Select>
                            </WrapperSelect>
                            <ButtonCadastrarEqp>Cadastrar</ButtonCadastrarEqp>
                        </FormCadastro>
                    </Register>

                    <ListSalas>
                        <SubTittleLista>Salas</SubTittleLista>
                        <FrameList>
                            
                            {

                                this.state.listaequips.map( equipamento => { 

                                    return (

                                        <ItemList key={equipamento.idEquipamento}>

                                            <ContentItemList>

                                                <WrapperStatus>
                                                    { equipamento.situacao === 1 ? <StatusAtivo/> : <StatusInativo/> } 
                                                </WrapperStatus>
                                                <WrapperNameNumber>
                                                    <Tittles>{equipamento.nomeEquipamento}</Tittles>
                                                    <ValuesMarca>{equipamento.marca}</ValuesMarca>
                                                    <WrapperTittleValue>
                                                        <TittlesNumber>Nº Patrimônio:</TittlesNumber>
                                                        <Values>{equipamento.numeroPatrimonio}</Values>
                                                    </WrapperTittleValue>
                                                </WrapperNameNumber>
                                                <WrapperTypeNumber>
                                                    <SubValue>{equipamento.idTipoEquipamentoNavigation.tipoEquipamento1}</SubValue>
                                                    <WrapperTittleValue>
                                                        <TittlesNumber>Nº Serie:</TittlesNumber>
                                                        <Values>{equipamento.numeroSerie}</Values>
                                                    </WrapperTittleValue>
                                                </WrapperTypeNumber>
                                                <WrapperIcons>
                                                    <IconDelete/>
                                                    <IconUpdate/>
                                                </WrapperIcons>

                                            </ContentItemList>                                

                                        </ItemList>


                                    )

                                })

                            }

                        </FrameList>
                    </ListSalas>

                </WrapperBody>
            </Container>

        )

    }

}