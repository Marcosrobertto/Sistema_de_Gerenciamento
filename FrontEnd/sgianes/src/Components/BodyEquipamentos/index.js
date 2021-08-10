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
            status : 1,
            nomeEqp : '',
            marca : '',
            tipoEquipamento : '',
            serie : '',
            patrimonio : '',
            descricao : '',

        }

    }
    

    BuscarEquipamentos = async () => {

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

    cadastrar = async () => {

        const response = await api.post('/Equipamentos', {

            headers:{

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            },

            nomeEquipamento     :     this.state.nomeEqp,
            marca               :     this.state.marca,
            idTipoEquipametno   :     this.state.tipoEquiamento,
            numeroPatrimonio    :     this.state.patrimonio,
            numeroSerie         :     this.state.numeroSerie,
            descrcao            :     this.state.descricao,
            situacao            :     this.state.status,

        } )

        if(response.status === 201){

            await this.BuscarEquipamentos()

        }

    }

    componentDidMount(){

        this.BuscarEquipamentos()

    }

    CheckStatusInative = () => {

        this.setState({ status : 1 });
        
    }

    CheckStatusAtive = () => {

        this.setState({ checkAtive : 2 });
        
    }
    
    AttState = (campo) => {

        this.setState({

            [campo.target.name] : [campo.target.value]

        })

    }

    render(){

        return(

            <Container>
                <Logo src={logo}/>
                <WrapperBody>
                    <Register>
                        <SubTittleEqp>Cadastre uma sala</SubTittleEqp>
                        <FormCadastro>
                            <InputCadastrar  name='nomeEqp'         onChange={this.AttState}      value={ this.state.nomeEqp }            placeholder='Nome do Equipamento'/>
                            <InputCadastrar  name='marca'           onChange={this.AttState}      value={ this.state.marca }              placeholder='Marca'/>
                            <InputCadastrar  name='tipoEquipamento' onChange={this.AttState}      value={ this.state.tipoEquipamento }    placeholder='Tipo de Equipamento'/>
                            <InputCadastrar  name='serie'           onChange={this.AttState}      value={ this.state.serie }              placeholder='Nº de Serie'/>
                            <InputCadastrar  name='patrimonio'      onChange={this.AttState}      value={ this.state.patrimonio }         placeholder='Nº de Patrimônio'/>
                            <InputCadastrar  name='descricao'       onChange={this.AttState}      value={ this.state.descricao }          placeholder='Descrição'/>
                            <WrapperSelect>
                                <Select>
                                    <InputSelect
                                        value={this.state.checkAtive}
                                        type='radio'
                                        checked={ this.state.checkAtive === 2 ? true : false }
                                        onClick={this.CheckStatusAtive}
                                        onChange={this.CheckStatusAtive}
                                    />
                                    <Marker />
                                    <TextSelect> Ativo </TextSelect>
                                </Select>
                                <Select>
                                    <InputSelect 
                                        value={this.state.status}
                                        type='radio'
                                        checked={this.state.checkInative === 1 ? true : false }
                                        onClick={this.CheckStatusInative}
                                        onChange={this.CheckStatusInative}
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