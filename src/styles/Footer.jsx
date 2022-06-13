import styled from 'styled-components';
import { DARK_GRAY } from '../helpers/colors';
import { GLOBAL_MARGIN, HEADER_PADDING, HEADER_HEIGHT, GLOBAL_MARGIN_SQUARE } from '../helpers/globalSizes';
import device from '../helpers/devices';

const { squareDisplay } = device;

export const StyledFooter = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: -${ GLOBAL_MARGIN };
  height: ${HEADER_HEIGHT};
  background-color: ${DARK_GRAY};
  padding: 0 ${ HEADER_PADDING };

  @media ${ squareDisplay } {
    margin-left: -${ GLOBAL_MARGIN_SQUARE };
    width: calc(100% + ${ GLOBAL_MARGIN_SQUARE });
  }
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
