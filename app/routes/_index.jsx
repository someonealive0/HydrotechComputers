import NavBar from "../components/NavBar";
import { NavLink } from "@remix-run/react"
import { Container } from "@mui/material"
import styles from "./_index.module.css"
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';


export const meta = () => {
  return [
    { title: "Hydrotech Computers" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const theme = useTheme();

  return (
    <>
      <Grid container className={styles.header} sx={{ flexDirection: { xs: "column", md: "row" }, minHeight: {xs: "450px", md: "600px"} }}>
        <Grid item container direction="column" className={styles.headerTitleContainer} sx={{ alignItems: { xs: "center", md: "start" }, justifyContent: { xs: "flex-start", md: "center" } }} xs={12} md={4}>
          <Typography fontFamily="Poppins" variant={useMediaQuery(theme.breakpoints.up('md')) ? "h3" : "h4"} sx={{ ml: { xs: 0, md: 2 }, textAlign: { xs: 'center', md: "left" } }} className={styles.headerTitle}>Hydrotech Computers</Typography>
          <Typography fontFamily="Poppins" variant={useMediaQuery(theme.breakpoints.up('md')) ? "h5" : "h6"} sx={{ ml: { xs: 0, md: 2 }, textAlign: { xs: 'center', md: "left" } }} className={styles.headerSubtitle}>'Cos What's Cooler Than Being Cool?</Typography>
          <Button sx={{ textTransform: "none", fontFamily: "Poppins", ml: { xs: 0, md: 2 }, my: 1 }} className={styles.headerButton} variant="contained">Let's Get Building!</Button>
        </Grid>
        <Grid sx={{ flexGrow: { xs: 1, md: 0 } }} item container direction="column" className={styles.headerPicsContainer} xs={12} md={8}>
        </Grid>
      </Grid>

      <Grid container className={styles.cardsContainer} sx={{ width: "90vw" }} alignItems="center">
        <Grid container item direction="column" alignItems="center" className={styles.card} xs={12} md={4} sx={{ mb: "15px", px: { xs: 0, md: "10px" } }}>
          <img className={styles.cardImg} src={"./staticassets/o11.jpg"}></img>
          <Grid container direction="column" justifyContent="center" alignItems="center" className={styles.cardContent} >
            <Typography fontFamily="Poppins" variant="h4" textAlign="center">PREBUILT PCs</Typography>
            <Typography fontFamily="Poppins" variant="subtitle" textAlign="center">Custom PC Builder</Typography>
            <Button sx={{ textTransform: "none", fontFamily: "Poppins", my: 2, width: "50%", py: 1.5 }} variant="contained" className={styles.cardButton}>Build Now</Button>
          </Grid>
        </Grid>

        <Grid container item direction="column" alignItems="center" className={styles.card} xs={12} md={4} sx={{ mb: "15px", px: { xs: 0, md: "10px" } }}>
          <img className={styles.cardImg} src={"./staticassets/o11.jpg"}></img>
          <Grid container direction="column" justifyContent="center" alignItems="center" className={styles.cardContent} >
            <Typography fontFamily="Poppins" variant="h4" textAlign="center">PC PARTS</Typography>
            <Typography fontFamily="Poppins" variant="subtitle" textAlign="center">Custom PC Builder</Typography>
            <Button sx={{ textTransform: "none", fontFamily: "Poppins", my: 2, width: "50%", py: 1.5 }} variant="contained" className={styles.cardButton}>Build Now</Button>
          </Grid>
        </Grid>

        <Grid container item direction="column" alignItems="center" className={styles.card} xs={12} md={4} sx={{ mb: "15px", px: { xs: 0, md: "10px" } }}>
          <img className={styles.cardImg} src={"./staticassets/o11.jpg"}></img>
          <Grid container direction="column" justifyContent="center" alignItems="center" className={styles.cardContent} >
            <Typography fontFamily="Poppins" variant="h4" textAlign="center">CUSTOM PCs</Typography>
            <Typography fontFamily="Poppins" variant="subtitle" textAlign="center">Check out our Custom PC part picker tool and design your own PC!</Typography>
            <Button sx={{ textTransform: "none", fontFamily: "Poppins", my: 2, width: "50%", py: 1.5 }} variant="contained" className={styles.cardButton}>Build Now</Button>
          </Grid>
        </Grid>
      </Grid >

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      asd
    </>
  );
}
