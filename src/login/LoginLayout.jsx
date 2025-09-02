import { useMediaQuery, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import logo from "../../public/logo-crypto-2.png";


const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap:"20px",
    flex: 1,
    boxShadow: "-2px 0px 16px rgba(0, 0, 0, 0.25)",
  },
  logoSection:{
    textAlign:"center"
  },
  form: {
    padding: "20px 10px",
    background: theme.palette.secondary.main,
    padding: theme.spacing(10, 5),
    borderRadius:"20px",
    width: "30%",
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <section className={classes.logoSection}>
          <img src={logo} alt="logo" />
          <h1>IOT City Hub</h1>
        </section>
        <form className={classes.form}>{children}</form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
