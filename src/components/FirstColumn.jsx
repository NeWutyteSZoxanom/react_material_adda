import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const FirstColumn = () => {
  return (
    <div>
      <Paper elevation={3} square>
        <a className="profill_banner_small" href="/">
          <img src="./assets/banner-small.jpg" />
        </a>
        <div className="profill_banner_down">
          <h3>Dimbel Lebmid</h3>

          <p>
            Any one can join with but Social network us if you want Any one can join with us if you
            want
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default FirstColumn;
