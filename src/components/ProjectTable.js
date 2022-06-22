import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrowDownIcon, arrowUpIcon, folderIcon } from '../helpers/icons';
import { ComponentContainer } from '../styles/GlobalStyle';
import allProjects from '../helpers/projects';
import { Column, Container, Content, Data, FolderButton, FolderTitle, FolderButtons, FolderHeader, HeadData, Header, Footer, Table } from '../styles/Codes';

function ProjectTable() {
  const [orderUp, setOrderUp] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByDate, setSortByDate] = useState(true);
  const [screen, setScreen] = useState(0);

  function handleSort({ target: { id } }) {
      setSortByName(id === 'name');
      setSortByDate(id === 'date');

      setOrderUp(!orderUp);
  }

  function fillScreen() {
    const desiredItemsAmount = [];
    const td = document.querySelector('td');
    const rowHeight = td && (td.offsetHeight);
    const itemsAmount = parseInt(screen / rowHeight - 1);

    for (let i = 0; i < itemsAmount; i += 1) {
      desiredItemsAmount.push(
        <Column key={ i }>
          <Data />
          <Data />
        </Column>
      )
    }

    return desiredItemsAmount;
  }

  useEffect(() => {
    const { innerHeight } = window;

    const headerHeight = document.querySelector('header').offsetHeight;
    const windowHeight = document.querySelector('#window').offsetHeight;

    const height = innerHeight - (2 * headerHeight) - windowHeight;

    return setScreen(height);
  }, []);

  return (
    <ComponentContainer>
      <Container id="window">
        <FolderHeader>
          <FolderButtons>
            <FolderButton as={ Link } over color="red" to='/' />
            <FolderButton over color="yellow" />
            <FolderButton  over color="green" />
          </FolderButtons>
          <FolderTitle>Repositório dos projetos no GitHub</FolderTitle>
        </FolderHeader>

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
              <Column key={ index } onClick={ () => window.open(linkRepo, '_blank', 'noopener,noreferrer') }>
                <Data>{ folderIcon() } { name }</Data>
                <Data>{ date }</Data>
              </Column>
            ))
          }
          { allProjects.length < 20 && fillScreen() }
          </Content>
        </Table>
          <Footer id="footer">{ allProjects.length } itens</Footer>
      </Container>
    </ComponentContainer>
  );
}

export default ProjectTable;