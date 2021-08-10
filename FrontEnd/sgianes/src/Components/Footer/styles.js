import styled from 'styled-components';

import { Logo } from '../BodyLogin/styles'
import { Text } from '../BodyHome/styles'

import bgFooter from '../../Imgs/Footerbg.png'

export const Container = styled.div`
  background-image: url(${bgFooter});
  height: 25rem;
  margin-top: 3rem;
`;
export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
`;
export const LogoFooter = styled(Logo)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export const TittleFooter = styled.h5`
  font-size: 1.4rem;
  margin: 1rem 0;
  padding: 0;
  font-family: 'Oxygen', sans-serif;
`;
export const Integrant = styled.p`
  margin: 0.2rem 0;
  font-family: 'Oxygen', sans-serif;
`;
export const TextFooter = styled(Text)`
  font-family: 'Oxygen', sans-serif;
  font-weight: bold;
`;

