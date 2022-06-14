import React, { useState } from 'react';
import { arrowDownIcon, arrowUpIcon, folderIcon } from '../helpers/icons';
import { ComponentContainer } from '../styles/GlobalStyle';
import allProjects from '../helpers/projects';
import { Column, Container, Content, Data, FolderButton, FolderTitle, FolterButtons, FolterHeader, HeadData, Header, Footer, Table } from '../styles/Codes';

function ProjectTable() {
  const [orderUp, setOrderUp] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByDate, setSortByDate] = useState(true);

  function handleSort({ target: { id } }) {
      setSortByName(id === 'name');
      setSortByDate(id === 'date');

      setOrderUp(!orderUp);
  }

  return (
    <ComponentContainer>
      <Container>
        <FolterHeader>
          <FolterButtons>
            <FolderButton over color="red" />
            <FolderButton over color="yellow" />
            <FolderButton  over color="green" />
          </FolterButtons>
          <FolderTitle>Repositório dos projetos no GitHub</FolderTitle>
        </FolterHeader>

        <Table>
          <Header>
            <Column>
              <HeadData id="name" onClick={ handleSort }>Nome { sortByName && (orderUp ?  arrowUpIcon() : arrowDownIcon()) }</HeadData>
              <HeadData id="date" onClick={ handleSort }>Data de criação { sortByDate && (orderUp ?  arrowUpIcon() : arrowDownIcon()) }</HeadData>
            </Column>
          </Header>

          <Content>
          {
            allProjects.sort((a, b) => {
              if (orderUp && sortByName) {
                if (a.name > b.name) return 1;
                
                if (a.name < b.name) return -1;

                return 0;
              }
              
              if (orderUp && sortByDate) {
                if (a.index > b.index) return 1;
                
                if (a.index < b.index) return -1;

                return 0;
              }

              if (sortByName) {
                if (a.name < b.name) return 1;
                
                if (a.name > b.name) return -1;

                return 0;
              }
              
              if (sortByDate) {
                if (a.index < b.index) return 1;
                
                if (a.index > b.index) return -1;

                return 0;
              }

              return 0;
            }).map(({ name, date, linkRepo }, index) => (
              <Column key={ index } onClick={ () => console.log(name) }>
                <Data>{ folderIcon() } { name }</Data>
                <Data>{ date }</Data>
              </Column>
            ))
          }
          </Content>
        </Table>
          <Footer>{ allProjects.length } itens</Footer>
      </Container>
    </ComponentContainer>
  );
}

export default ProjectTable;