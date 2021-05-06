import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const ThirdColumn = () => {
  return (
    <>
      <Paper elevation={3} square>
        <h3>Recent Notifications</h3>
        <Avatar src="/assets/profile-small-9.jpg"></Avatar>
        <h3>Any one can join with us if you want</h3>
        <p>5 Min Ago</p>
        profile-small-9.jpg profile-small-35.jpg
      </Paper>
    </>
  );
};

export default ThirdColumn;
