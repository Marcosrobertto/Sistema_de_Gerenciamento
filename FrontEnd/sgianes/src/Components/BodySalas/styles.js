import styled from 'styled-components';
import { Trash } from '@styled-icons/bootstrap/Trash'
import { Pencil } from '@styled-icons/bootstrap/Pencil'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const WrapperBody = styled.div`
  display: flex;
  width: 100vw;
`;

export const Register = styled.div`
  background-color: #006699;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70vh;
  align-items: center;
  border-radius: 0 60px 60px 0;
`;

export const SubTittle3 = styled.h3`
  font-size: 1.6rem;
  color: #FFF;
  letter-spacing: 0.2rem;
  text-transform: capitalize;
  margin: 3rem 0;
`;

export const FormCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputCadastrar = styled.input`
  background-color: transparent;
  width: 15rem;
  height: 1.5rem;
  margin: 0.5rem 0;
  outline: none;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-family: 'Oxygen', sans-serif;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  border-top: 1px transparent solid; 
  border-left: 1px transparent solid; 
  border-right: 1px transparent solid; 
  border-bottom: 1px #FFFFFF solid;
  ::placeholder{
    color: #FFF;
  }
`;

export const ButtonCadastrar = styled.button`
  background-color: #E64D50;
  width: 15rem;
  height: 2rem;
  margin: 3rem;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #FFF;
  :hover{
    color:#E64D50;
    background-color: #FFF;
  }
`;

export const ListSalas = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin: 0 auto;
  align-items: center;
`;

export const SubTittleLista = styled.h3`
  font-size: 2rem;
  margin: 0;
  color: #006699;
`;

export const FrameList = styled.div`
  background-color: #006699; 
  width: 100%;
  height: 25rem;
  margin: 0 auto;
  border-radius: 15px;
  overflow: auto;
`;

export const ItemList = styled.div`
  display: flex;
  background: #FFF;
  width: 80%;
  height: 25%;
  margin: 1rem auto;
  border-radius: 10px;
  overflow:auto;
`;

export const FrameAndar = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
  margin: 0.5rem;
  border: #006699 solid 3px;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const TextItem = styled.div`
  color: #006699;
  font-size: 1.2rem;
`;

export const TextSala = styled(TextItem)`
  margin: 0.5rem 1rem;
`;

export const TextMetro = styled(TextItem)`
  margin: auto 1rem 1rem 1rem;
`;

export const FrameContentItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  justify-content: space-between;
  `;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  `;

export const Icons = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  `;

export const IconUpdate = styled(Pencil)`
  width: 1.6rem;
  margin: auto;
  cursor: pointer;
  :hover{
    color: grey;
  }
`;

export const IconDelete = styled(Trash)`
  width: 1.6rem;
  margin: auto;
  cursor: pointer;
  :hover{
    color: red;
  }
`;