import styled from 'styled-components';

import bglogin from '../../Imgs/backgroundLogin.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${bglogin});
  background-color: rgba(0, 102, 153, 0.4);
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: 50px;
  margin: 3rem 0;
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.61);
  width: 500px;
  height: 400px;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;
`;


export const Tittle = styled.h1`
  color: black;
  text-transform: uppercase;
  margin: 2rem 0;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputIANES = styled.input`
  background-color: transparent;
  width: 20rem; 
  height: 2rem;
  margin: 1rem 0;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Oxygen', sans-serif;
  border-top: 1px transparent solid;
  border-left: 1px transparent solid;
  border-right: 1px transparent solid;
  border-bottom: 1px black solid;
  outline: 0;
`;

export const ButtonIANES = styled.input`
  background-color: #006699;
  color: #FFFFFF;
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  margin: 1rem auto;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Anton', sans-serif;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 1.2rem;
  text-transform: capitalize;
`;