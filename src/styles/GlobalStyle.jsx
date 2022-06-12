import styled from 'styled-components';
import { GLOBAL_MARGIN, HEADER_HEIGHT } from '../helpers/globalSizes';
import { BLACK } from '../helpers/colors';

export const PageContainer = styled.div`
  margin: 0 ${ GLOBAL_MARGIN };
  width: calc(100vw - (${ GLOBAL_MARGIN } * 2));
  max-width: 100vw;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ComponentContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - (${HEADER_HEIGHT}));
  top: ${HEADER_HEIGHT};
`;
