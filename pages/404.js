import { Container, makeStyles } from "@material-ui/core";
import React from 'react';
import Footer from "../src/componentes/commons/Footer";
import Header from "../src/componentes/commons/Header";
import sections from '../src/componentes/sections';


const useStyles = makeStyles((theme) => ({
    aut:{
        width: "360px",
        alignItems: "center"
    },
    param:{
        alignItems: 'center'

    }
  }));
export default function Page404() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container>
                <Header title="MarvelList" sections={sections}/>
                <div className={classes.param}>
                      Ops! Não encontramos a pagina desejada!
                      <img className={classes.aut} src='/3814348.jpg'/>
        </div>
        <Footer />
        </Container>
        </React.Fragment>
    )
}