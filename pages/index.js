import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../src/componentes/commons/Header';
import Footer from '../src/componentes/commons/Footer';
import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import api from '../pages/api/api';
import sections from '../src/componentes/sections';
import { has, publickey, time } from './api/param';


const LIMIT = 1;


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  cardMedia: {
    paddingTop: '100%', // 16:
    alignContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    flexGrow: 1,
    alignContent:'center',
    alignItems: 'center',
    background: '#FFFFFF'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  h1:{
    alignContent: 'center'
  }
}));

export default function Index() {
  const classes = useStyles();

  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [creators, setCreators] = useState([]);
  const [events, setEvents] = useState ([]);
  const [series, setSeries] = useState([]);


  useEffect(() => {
    api
    .get(`characters?limit=${LIMIT}&ts=${time}&apikey=${publickey}&hash=${has}`)
    .then((response) => {
        setCharacters(response.data.data.results);     
      })
      .catch((error) => {
        console.error(error);
      })  
    }, []);

  useEffect(() => {
    api
    .get(`comics?limit=${LIMIT}&ts=${time}&apikey=${publickey}&hash=${has}`)
    .then((response) => {
        setComics(response.data.data.results);     
      })
      .catch((error) => {
        console.error(error);
      })  
    }, []);

  useEffect(() => {
    api
    .get(`creators?limit=${LIMIT}&ts=${time}&apikey=${publickey}&hash=${has}`)
    .then((response) => {
        setCreators(response.data.data.results);     
      })
      .catch((error) => {
        console.error(error);
      })  
    }, []);

  useEffect(() => {
      api
      .get(`events?limit=${LIMIT}&ts=${time}&apikey=${publickey}&hash=${has}`)
      .then((response) => {
          setEvents(response.data.data.results);     
        })
        .catch((error) => {
          console.error(error);
        })  
      }, []);

      useEffect(() => {
        api
        .get(`series?limit=${LIMIT}&ts=${time}&apikey=${publickey}&hash=${has}`)
        .then((response) => {
            setSeries(response.data.data.results);     
          })
          .catch((error) => {
            console.error(error);
          })  
        }, []);
  return (
    <React.Fragment>
    <Container maxWidth="lg">
      <Header title="MarvelList" sections={sections}/>
      <h1 className={classes.h1}>ESCOLHA UMA OPÇÃO</h1>
      <Grid container spacing={4}>
      {characters.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>
              <Link
              color="inherit"
              noWrap
              key={k}
              variant="body2"
              href='/characters'
              className={classes.toolbarLink}

              > 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      CHARACTERS
                      </Typography>
                  </CardContent>
                  </CardMedia>
                </Card>
                </Link>
                    
              </Grid>
              ))}

      {comics.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>
              <Link
              color="inherit"
              noWrap
              key={k}
              variant="body2"
              href='/comics'
              className={classes.toolbarLink}

              > 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center"> 
                      COMICS
                      </Typography>
                  </CardContent>
                  </CardMedia>
                </Card>
                </Link>
                    
              </Grid>
              ))}

      {creators.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>

              <Link
              color="inherit"
              noWrap
              key={k}
              variant="body2"
              href='/creators'
              className={classes.toolbarLink}

              > 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      CREATORS
                      </Typography>
                  </CardContent>
                  </CardMedia>
                </Card>
                </Link>
                    
              </Grid>
              ))}

      {events.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>

              <Link
              color="inherit"
              noWrap
              key={k}
              variant="body2"
              href='/events'
              className={classes.toolbarLink}

              > 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center"> 
                      EVENTS
                      </Typography>
                  </CardContent>
                  </CardMedia>
                </Card>
                </Link>
                    
              </Grid>
              ))}

              {series.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>
              <Link
              color="inherit"
              noWrap
              key={k}
              variant="body2"
              href='/series'
              className={classes.toolbarLink}
              > 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                   SERIES
                      </Typography>
                  </CardContent>
                  </CardMedia>
                </Card>
                </Link>
                    
              </Grid>
              ))}
          </Grid>
  
      <Footer />
    </Container>
    </React.Fragment>
  );
}