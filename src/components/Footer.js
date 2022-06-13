import React from 'react';
import { discordIcon, gitHubIcon, linkedInIcon } from '../services/icons';
import { Container, StyledFooter, A } from '../styles/Footer';
import { StyledLink } from '../styles/Header';
import { BLACK, BLUE_LINKEDIN } from '../helpers/colors';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <A
          href="https://www.linkedin.com/in/matheuscontassot/"
          target="_blank"
          rel="noopener noreferrer"
          color={ BLUE_LINKEDIN }
        >
          {linkedInIcon()}
        </A>

        <A
          href="https://github.com/MattContassot"
          target="_blank"
          rel="noopener noreferrer"
          color={ BLACK }
        >
          {gitHubIcon()}
        </A>

        <StyledLink to="/404">
          {discordIcon()}
        </StyledLink>        
      </Container>
    </StyledFooter>
  );
}

export default Footer;