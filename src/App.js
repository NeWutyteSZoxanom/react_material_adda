import './App.css';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FirstColumn from './components/FirstColumn';
import SecondColumn from './components/SecondColumn';
import ThirdColumn from './components/ThirdColumn';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  paper: {},
}));

function App() {
  const classes = useStyles();

  return (
    <div className="apps">
      <NavBar />

      <Container className="container_app" spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <FirstColumn />
          </Grid>
          <Grid item xs={6}>
            <SecondColumn />
          </Grid>
          <Grid item xs={3}>
            <ThirdColumn />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
