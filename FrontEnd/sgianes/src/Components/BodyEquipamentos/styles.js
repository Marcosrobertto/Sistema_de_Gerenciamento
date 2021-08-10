import styled from 'styled-components';

import { SubTittle3, ButtonCadastrar } from '../BodySalas/styles'

import { Trash } from '@styled-icons/bootstrap/Trash'
import { Pencil } from '@styled-icons/bootstrap/Pencil'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTittleEqp = styled(SubTittle3)`
  margin: 1rem;
`;

export const WrapperSelect = styled.div`
/* background-color: red; */
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
`;

export const InputSelect = styled.input`
  width: 2rem;
  height: 2rem;
  position: absolute;
  opacity: 80%;
  cursor: pointer;
`;

export const Marker = styled.span`
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  width: 2rem;
  height: 2rem;
  background-color: #FFF;
  border-radius: 50%;
`;

export const TextSelect = styled.p`
  margin-left: 1rem;
  font-family: 'Oxygen', sans-serif;
  font-weight: bolder;
  color: #FFF;  
`;

export const ButtonCadastrarEqp = styled(ButtonCadastrar)`
  margin: 0.3rem 0;
`;

export const ContentItemList = styled.div`
  display: flex;
  width: 95%;
  height: 90%;
  margin: auto;
`;

export const WrapperStatus = styled.div`
  width: 10%;
  height: 100%;
`;

export const StatusAtivo = styled.div`
  background-color: green;
  width: 80%;  
  height: 50%;
  border-radius: 50%;   
`;

export const StatusInativo = styled.div`
  background-color: red;
  width: 80%;  
  height: 50%;
  border-radius: 50%;   
`;

export const WrapperNameNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 100%;
`;

export const Tittles = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

export const TittlesNumber = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const Values = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: 'Oxygen', sans-serif;
  margin-left: 0.5rem;
`;

export const ValuesMarca = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: 'Oxygen', sans-serif;
`;

export const WrapperTittleValue = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTypeNumber = styled.div`
  display: flex;
  flex-direction: column; 
  width: 35%; 
  justify-content: space-around;
`;

export const SubValue = styled.p`
  margin: 0;
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  align-items: flex-end;
  width: 15%;
`;

export const IconDelete = styled(Trash)`
  width: 2rem;
`;

export const IconUpdate = styled(Pencil)`
  width: 2rem;
`;