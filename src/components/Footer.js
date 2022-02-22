import React from 'react';
import { Link } from 'react-router-dom';
import { discordIcon, gitHubIcon, linkedInIcon } from '../services/icons';

class Footer extends React.Component {
  constructor() {
    super();

    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse({ type, currentTarget }) {
    const {id, classList} = currentTarget;
    let operation = 'remove';
    if (type === 'mouseenter') operation = 'add';
    classList[operation](`${id}Selecionado`);
  }

  render() {
    return (
      <footer id="footer">
        <div>
          <a id="linkedIn" href="https://www.linkedin.com/in/matheuscontassot/" target="_blank" rel="noopener" onMouseEnter={ this.handleMouse } onMouseLeave={ this.handleMouse }>
            {linkedInIcon()}
          </a>
          <a id="gitHub" href="https://github.com/MattContassot" target="_blank" rel="noopener" onMouseEnter={ this.handleMouse } onMouseLeave={ this.handleMouse }>
            {gitHubIcon()}
          </a>
          <Link to="/404">
            {discordIcon()}
          </Link>        
        </div>
      </footer>
    );
  }
}

export default Footer;