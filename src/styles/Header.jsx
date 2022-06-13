import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GLOBAL_MARGIN, GLOBAL_MARGIN_SQUARE, HEADER_PADDING, HEADER_HEIGHT, HEADER_PADDING_IPAD } from '../helpers/globalSizes';
import { DARK_GRAY } from '../helpers/colors';
import device from '../helpers/devices';

const { iPhone, tablet, squareDisplay } = device;

export const StyledHeader = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - (${ HEADER_PADDING } * 2));
  margin-left: -${ GLOBAL_MARGIN };
  padding: 0 ${ HEADER_PADDING };
  height: ${HEADER_HEIGHT};
  position: fixed;
  background-color: ${DARK_GRAY};

  @media ${ tablet } {
    padding: 0 ${ HEADER_PADDING_IPAD };
    width: calc(100% - (${ HEADER_PADDING_IPAD } * 2));
  }
  
  @media ${ squareDisplay } {
    margin-left: -${ GLOBAL_MARGIN_SQUARE };
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 52%;

  & :first-child {
    padding-left: ${ HEADER_PADDING };
  }
  
  @media ${ tablet } {
    width: 45%;

    & :first-child {
      padding-left: ${ HEADER_PADDING_IPAD };
    }
  }

  @media ${ squareDisplay } {
    width: 35%;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: ${({ title }) => title ? 'bold' : 'normal'};
  width: ${({ title }) => title && '48%'};
`;
