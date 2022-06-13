import styled from 'styled-components';
import { GLOBAL_MARGIN, HEADER_HEIGHT, GLOBAL_MARGIN_SQUARE } from '../helpers/globalSizes';
import device from '../helpers/devices';

const { iPhone, squareDisplay } = device;

export const PageContainer = styled.div`
  margin: 0 ${ GLOBAL_MARGIN };
  width: calc(100% - (${ GLOBAL_MARGIN } * 2));

  @media ${ iPhone } {
    font-size: 1.2rem;
  }

  @media ${ squareDisplay } {
    margin: 0 ${ GLOBAL_MARGIN_SQUARE };
    width: calc(100% - (${ GLOBAL_MARGIN_SQUARE } * 2));
  }
`;

export const ComponentContainer = styled.main`
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  flex-direction: 'column';
  flex-wrap: wrap;
  /* justify-content: center; */
  justify-content: flex-start;
  min-height: calc(100vh - (${ HEADER_HEIGHT } * 2) - 1rem);
  padding-top: calc((${ HEADER_HEIGHT }) + 1rem);
  width: 100%;

  @media ${ iPhone } {
    flex-direction: ${({ direction }) => direction ? direction : 'column'};
  }
`;
