import styled from 'styled-components';
import device from '../helpers/devices';

const { tablet, squareDisplay } = device;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50%;

  @media ${ tablet } {
    margin-top: 35%;
  }

  @media ${ squareDisplay } {
    margin-top: 18%;
  }
`;

export const Gif = styled.img `
  width: 40%;

  @media ${ squareDisplay } {
    width: 15%;
  }
`;

export const Text = styled.h4`
  margin-top: -1.5rem;
`;
