import { Card, CardContent, CardMedia, Container, Grid, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import api from '../pages/api/api';
import Header from '../src/componentes/commons/Header';
import sections from '../src/componentes/sections';
import { has, publickey, time } from './api/param';
import PaginationRounded from '../src/componentes/commons/Pagination';
import Footer from '../src/componentes/commons/Footer';

const LIMIT = 21

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Series() {

    const classes = useStyles();

    const [series, setSeries] = useState([]);
    const [requestInfo, setRequestInfo] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        api
        .get(`series?limit=${LIMIT}&offset=${offset}&ts=${time}&apikey=${publickey}&hash=${has}`)
        .then((response) => {
            setRequestInfo(response.data.data);
            setSeries(response.data.data.results);     
          })
          .catch((error) => {
            console.error(error);
          })  
        }, [offset]);
      
    return (
        <React.Fragment>
            <Container>
                <Header title="MarvelList" sections={sections}/>
                <Container className={classes.cardGrid} maxWidth="md">
        
          <Grid container spacing={4}>
            {series.map((i,k) => (
              <Grid item key={k} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension}`}
                    title={i.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {i.title}
                      </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
            {requestInfo && (
              <PaginationRounded
                limit={LIMIT}
                total={requestInfo.total}
                offset={offset}
                setOffset={setOffset}
              />
            )}
        
      </Container>
      <Footer />
            </Container>
        </React.Fragment>
    )
}