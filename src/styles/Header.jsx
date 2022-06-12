import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GLOBAL_MARGIN, HEADER_PADDING, HEADER_HEIGHT, HEADER_PADDING_IPAD } from '../helpers/globalSizes';
import { DARK_GRAY } from '../helpers/colors';

export const StyledHeader = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - (${ HEADER_PADDING } * 2));
  margin-left: -${ GLOBAL_MARGIN };
  padding: 0 ${ HEADER_PADDING };
  height: ${HEADER_HEIGHT};
  position: fixed;
  background-color: ${DARK_GRAY};

  @media (min-width: 768px) {
    padding: 0 ${ HEADER_PADDING_IPAD };
    width: calc(100vw - (${ HEADER_PADDING_IPAD } * 2));
  }
  
  @media (min-width: 1024px) {
    font-size: 1.3em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 55%;

  & :first-child {
    padding-left: ${ HEADER_PADDING };
  }

  @media (min-width: 768px) {
    width: 45%;

    & :first-child {
      padding-left: ${ HEADER_PADDING_IPAD };
    }
  }

  @media (min-width: 1024px) {
    width: 35%;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: ${({ title }) => title ? 'bold' : 'normal'};
  width: ${({ title }) => title && '45%'};
`;
