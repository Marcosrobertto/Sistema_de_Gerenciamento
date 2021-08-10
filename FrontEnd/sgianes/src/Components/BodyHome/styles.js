import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bgBanner from '../../Imgs/backgroundBannerHome.png'

import { BoxArrowUpRight } from '@styled-icons/bootstrap/BoxArrowUpRight'
import { DoorClosed } from '@styled-icons/bootstrap/DoorClosed'

export const Container = styled.div`
`;

export const Banner = styled.div`
  background-image: url(${bgBanner});
  width: 100%;
  height: 100vh;    
`;

export const ContentBanner = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const TopHome = styled.div`
display:flex;
align-items: flex-end;
justify-content: space-between;
`

export const ButtonExit = styled(Link)`
  background-color: rgba(0, 0, 0, 0.22);
  display:flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: 0 20%;
  padding: 0 1rem;
`

export const Sair = styled.p`
  color: #FFFFFF;
`

export const Tittle = styled.h1`
  margin: 0;
  padding: 2rem 0 0 0;
  color: #BC180F;
  font-size: 3rem;
`;

export const IconExit = styled(DoorClosed)`
  width: 2rem;
  height: 2rem;
  color: #FFFFFF;
  :hover{

    color: red;

  }
`;

export const SubTittle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #006699;
  :nth-child(1){
    color: #BC180F;
  }
`;

export const BackgroundText = styled.div`
  background-color: rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  border-radius: 5px;
  `;

export const Text = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
  color: #FFFFFF;
  font-family: 'Oxygen', sans-serif;
`;

export const SectionRedirect = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto 0;
  align-items: center;
  justify-content: center;
`;

export const WrapperCards = styled.div`
  width: 80%; 
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const CardRedirect = styled.div`
  display:flex;
  flex-direction: column;
  width: 20rem;
  height: 18rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000099;
`;

export const CardImg = styled.img`
  width: 18rem;
  height: 12rem;
  margin: 1rem auto;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  /*   background-color: red; */
  margin: 0 auto;
  color: #006699;
  outline: none;
  border: 0;
  text-decoration: none;
  justify-content: center;
  :hover{
    text-decoration: underline;
  }
  `;

export const BoxArrowUpRightIcon = styled(BoxArrowUpRight)`
  /* background-color:red;  */
  width: 50px;
  height: 15px;
`;
