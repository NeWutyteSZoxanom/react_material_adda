import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

const NavbarMobile = () => {
  return (
    <div className="navbar_conta">
      <div>
        <img src="./assets/logo.png" />
      </div>
      <div>
        <PeopleAltOutlinedIcon />
      </div>
      <div>
        <NotificationsActiveOutlinedIcon />
      </div>
      <div>
        <ChatBubbleOutlineTwoToneIcon />
      </div>
      <div>
        <SearchIcon />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default NavbarMobile;
