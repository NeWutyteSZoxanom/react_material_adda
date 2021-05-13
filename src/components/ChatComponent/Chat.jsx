import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';

const Chat = () => {
  return (
    <div>
      {' '}
      <Paper elevation={3} square className="paper_friends_chat">
        <div square className="paper_friends_chat_header">
          <div className="paper_friends_chat_header_info">
            <div>
              <Avatar src="/assets/profile-small-9.jpg"></Avatar>
            </div>
            <div className="paper_friends_paper_pp">
              <h4>William Henry</h4>
              <span className="paper_friends_paper_p">Online</span>
            </div>
          </div>
          <div>
            <IconButton>
              <DeleteOutlinedIcon />
            </IconButton>
            <IconButton>
              {' '}
              <MoreIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Chat;
