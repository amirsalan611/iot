import { useMediaQuery, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useTheme } from "@mui/material/styles";
import logo from "../../public/LOGO.webp";
import { Color } from "maplibre-gl";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  paper: {
    background: `linear-gradient(to bottom left, ${
      theme.palette.primary.main
    } ${theme.direction === "rtl" ? "100%" : "0%"}, transparent ${
      theme.direction === "rtl" ? "100%" : "100%"
    })`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flex: 1,
    boxShadow: "-2px 0px 16px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
  },
  image: {
    Color: "white",
  },
  logoSection: {
    textAlign: "center",
  },
  form: {
    padding: theme.spacing(5),
    borderRadius: "20px",
    width: "30%",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.18)",

    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      padding: theme.spacing(3, 3, 0, 3),
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      padding: theme.spacing(2, 2, 0, 2),
    },
  },
  h1: {
    [theme.breakpoints.down("sm")]: {
      fontSize:"20px"
    },
  },
}));

const LoginLayout = ({ children }) => {
  console.log(useTheme());
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <section className={classes.logoSection}>
          <img src={logo} alt="logo" className={classes.image} />
        </section>
        <form className={classes.form}>{children}</form>
        <h1 className={classes.h1}>توسعه دهندگان هوشمند نسل فردا</h1>
      </Paper>
    </main>
  );
};

export default LoginLayout;
