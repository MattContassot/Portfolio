import styled from 'styled-components';
import { DARK_GRAY, BLACK, BLUE_LINKEDIN } from '../helpers/colors';
import { GLOBAL_MARGIN, HEADER_PADDING, HEADER_HEIGHT } from '../helpers/globalSizes';

export const StyledFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - (${ HEADER_PADDING } * 2));
  margin-left: -${ GLOBAL_MARGIN };
  height: ${HEADER_HEIGHT};
  background-color: ${DARK_GRAY};
  padding: 0 ${ HEADER_PADDING };
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 13rem;
`;

export const A = styled.a`
  > * :hover {
    color: ${ ({ color }) => color };
  }
`;
