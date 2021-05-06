import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

const NavBar = () => {
  return (
    <div className="navbar ">
      <Container fixed>
        <div className="navbar_conta">
          <div>
            <img src="./assets/logo.png" />
          </div>

          <div className="span_nav">
            <a href="/">
              <span className="span_menyu">Home</span>
            </a>
            <a href="/">
              <span className="span_menyu">Message</span>
            </a>
            <a href="/">
              <span className="span_menyu">Notification</span>
            </a>
          </div>
          <div>
            <Avatar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
