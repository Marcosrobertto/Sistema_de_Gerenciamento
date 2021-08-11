import { useEffect, useState } from "react"


import {Container, WrapperBody, Register, InputCadastrar, ButtonCadastrar, SubTittle3, FormCadastro, ListSalas, SubTittleLista, FrameList, ItemList, FrameAndar, TextItem, TextSala, TextMetro, FrameContentItems, Data, Icons, IconUpdate, IconDelete } from './styles'
import {Logo} from '../BodyLogin/styles'

import logo from '../../Imgs/logo.png'

import api from '../../Services/api'

import { useForm } from "react-hook-form"


function BodySalas() {

    const [listaSalas, setListaSalas] = useState([])

    const { register, handleSubmit } = useForm()

    async function BuscarSalas() {
        
        const response = await api.get('/salas', {

            headers : {

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }

        })
            
        if( response.status === 200 ) {
            
            console.log('resposta ok')
            
            setListaSalas(response.data)
            
            console.log(listaSalas)
            
        }

    }

    async function CadastrarSala(data) {

        const nome = data.nome
        const andar = data.andar
        const metragem = data.metragem

        console.log(nome, andar, metragem)
        
        const response = await api.post('/salas', {
                        
            nome       :     nome,
            andar      :     andar,
            metragem   :     metragem,
        },
            
        {   
            headers:{

            'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }
        })

        if( response.status === 201 ){

            console.log('api bom')

            await BuscarSalas();

        }

    }

    async function ApagarSala(id){

        const iddelete = id

        const response = await api.delete('/salas/' + iddelete, {

            headers : {

                'Authorization' : 'Bearer ' + localStorage.getItem('tokenuserup')

            }

        })

        if(response.status === 204){

            await BuscarSalas()

        }

    }

    useEffect( () => {

        BuscarSalas();

    }, []);
    
    return(

        <Container>
                <Logo src={logo}/>
                <WrapperBody>

                    <Register>
                        <SubTittle3>Cadastre uma sala</SubTittle3>
                        <FormCadastro onSubmit={handleSubmit(CadastrarSala)}>
                            <InputCadastrar {...register('andar')}      placeholder='Nº Andar (ex: 1º Andar)'/>
                            <InputCadastrar {...register('nome')}       placeholder='Nome (ex: Sala de Redes)'/>
                            <InputCadastrar {...register('metragem')}   placeholder='Metragem (ex: 16 m²)'/>
                            <ButtonCadastrar type='submit' value='Cadastrar'/>
                        </FormCadastro>
                    </Register>

                    <ListSalas> 
                        <SubTittleLista>Salas</SubTittleLista>
                        <FrameList>
                            {

                                listaSalas.map( sala => {

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
                                                    <IconDelete onClick={ () => {ApagarSala(sala.idSala)} }/>
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

export default BodySalas;