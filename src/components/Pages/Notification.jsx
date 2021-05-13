import React from 'react';
import Grid from '@material-ui/core/Grid';
import Friends from './../ChatComponent/Friends';
import Chat from './../ChatComponent/Chat';
import Paper from '@material-ui/core/Paper';

const Notification = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={3} square className="paper_friends_h1">
            <h1 className="paper_friends_h1_box">Friends/Massages</h1>
            <div className="paper_friends_ul_div">
              <ul className="paper_friends_ul">
                <li>All</li>
                <li> Recently</li>
                <li> Relative</li>
                <li>ACollage</li>
                <li>Request</li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Friends />
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  );
};

export default Notification;
