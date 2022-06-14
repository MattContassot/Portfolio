import styled from 'styled-components';
import { DARK_GRAY, LIGHTER_GRAY, LIGHT_GRAY, GRAY, TABLE_ODD, BLACK, TABLE_EVEN, TESTE } from '../helpers/colors';
import device from '../helpers/devices';
import { BrowserButtons, BrowserButton } from './ProjectCard';

const { squareDisplay } = device;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${ LIGHTER_GRAY };
  border-radius: 5px;

  @media ${ squareDisplay } {
    width: 100%;
  }
`;

export const FolterHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const FolterButtons = styled(BrowserButtons)`
  display: flex;
  justify-content: center;
  width: 14%;
`;

export const FolderButton = styled(BrowserButton)`
  height: 9px;
  width: 9px;
  background-color: ${({ over, color }) => over ? color : LIGHT_GRAY};
`;

export const FolderTitle = styled.p`
  color: ${ DARK_GRAY };
  width: 86%;
  text-align: center;
`;

export const Table = styled.table`
border-collapse: collapse;
  width: 100%;
`;

export const Header = styled.thead`
  width: 100%;
  background-color: ${ TABLE_ODD };
  border-top: solid ${ GRAY } 1px;
  border-bottom: solid ${ GRAY } 1px;
  font-size: 0.8rem;
`;

export const Column = styled.tr`
  height: 1.3rem;
  width: 100%;
`;

export const HeadData = styled.th`
  color: ${ BLACK };
  text-align: left;
  padding-left: 0.3rem;
  width: 60%;

  svg {
    vertical-align: middle;
    height: 1em;
    width: 1em;
  }

  svg > path {
    color: ${ BLACK };
  }
`;

export const Content = styled.tbody`
  width: 100%;
  align-items: center;

  tr:nth-child(odd) {
    background-color: ${ TABLE_ODD };
  }
  
  tr:nth-child(even) {
    background-color: ${ TABLE_EVEN };
  }

  tr:hover {
    background-color: ${ LIGHTER_GRAY };
  }
`;

export const Data = styled.td`
  color: ${ BLACK };
  font-size: 0.8rem;
  padding-left: 0.3rem;
`;

export const Footer = styled.p`
  border-top: solid ${ GRAY } 1px;
  width: 100%;
  color: ${ BLACK };
  font-size: 0.8rem;
  text-align: center;
`;
