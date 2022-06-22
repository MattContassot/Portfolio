import styled from 'styled-components';
import { DARK_GRAY, LIGHTER_GRAY, LIGHT_GRAY, GRAY, TABLE_ODD, BLACK, TABLE_EVEN, BLUE_FOLDER } from '../helpers/colors';
import device from '../helpers/devices';
import { BrowserButtons, BrowserButton } from './ProjectCard';

const { iPhone, tablet, notebook, squareDisplay } = device;

const buttonWidth = {
  motoG: '14%',
  tablet: '9%',
  notebook: '6%',
  squareDisplay: '5%',
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${ LIGHTER_GRAY };
  border-radius: 5px;
`;

export const FolderHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const FolderButtons = styled(BrowserButtons)`
  display: flex;
  justify-content: center;
  width: ${buttonWidth.motoG};

  @media ${ tablet } {
    width: ${buttonWidth.tablet};
  }
  
  @media ${ notebook } {
    width: ${buttonWidth.notebook};
  }
  
  @media ${ squareDisplay } {
    width: ${buttonWidth.squareDisplay};
  }
`;

export const FolderButton = styled(BrowserButton)`
  height: 9px;
  width: 9px;
  background-color: ${({ over, color }) => over ? color : LIGHT_GRAY};
  
  :hover {
    transform: scale(${({ color }) => color === 'red' ? '1.3' : '1'});
    transition: all 0.2s;
  }

  @media ${ tablet } {
    height: 10px;
    width: 10px;
  }
  
  @media ${ notebook } {
    height: 11px;
    width: 11px;
  }
`;

export const FolderTitle = styled.p`
  color: ${ DARK_GRAY };
  width: calc(100% - ${buttonWidth.motoG});
  text-align: center;

  @media ${ tablet } {
    width: calc(100% - ${buttonWidth.tablet});
  }
  
  @media ${ notebook } {
    width: calc(100% - ${buttonWidth.notebook});
  }
  
  @media ${ squareDisplay } {
    width: calc(100% - ${buttonWidth.squareDisplay});
  }
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
  font-size: 0.8rem;

  svg {
    vertical-align: middle;
    height: 1em;
    width: 1em;
  }

  svg > path {
    color: ${ BLACK };
  }

  @media ${ iPhone } {
    font-size: 1rem;
  }
  
  @media ${ squareDisplay } {
    padding-left: 0.7rem;
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

  svg {
    vertical-align: middle;
    height: 1em;
    width: 1em;
  }

  svg > path {
    color: ${ BLUE_FOLDER };
  }

  @media ${ iPhone } {
    font-size: 1rem;
    height: 1.5rem;
  }

  @media ${ squareDisplay } {
    padding-left: 0.7rem;
  }
`;

export const Footer = styled.p`
  border-top: solid ${ GRAY } 1px;
  width: 100%;
  color: ${ BLACK };
  font-size: 0.8rem;
  text-align: center;
  align-self: center;
  height: 1.3rem;
  line-height: 1.3rem;
`;
