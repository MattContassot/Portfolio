import styled from 'styled-components';
import { DARK_GRAY, LIGHT_GRAY } from '../helpers/colors';
import device from '../helpers/devices';

const { tablet, squareDisplay } = device;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  transform: scale(${({ over }) => over ? 1.03 : 1});
  transition: all 0.3s;

  @media ${ tablet } {
    width: 49%;

    :nth-child(n) {
      padding-right: 2%;
    }

    :nth-child(even) {
      padding-right: 0;
    }
  }
  
  @media ${ squareDisplay } {
    width: 32%;

    :nth-child(n) {
      padding-right: 2%;
    }
    
    :nth-child(3n) {
      padding-right: 0;
    }
  }
`;

export const BrowserWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: ${ DARK_GRAY };
  border-radius: 5px 5px 0 0;
  width: 100%;
  padding: 0 3px;
`;

export const BrowserButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 5%;
`;

export const BrowserButton = styled.div`
  background-color: ${ LIGHT_GRAY };
  margin: 0.3rem 0.15rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  align-self: center;
  background-color: ${({ over, color }) => over ? color : LIGHT_GRAY};
`;

export const Link = styled.a`
  width: 100%;
  height: 94%;
  display: flex;
  align-items: flex-end;
`;

export const BrowerScreen = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.p`
  padding-top: 0.3rem;
  padding-bottom: 0.7rem;
`;