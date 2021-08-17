import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  margin: 'auto',
  marginTop: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'

  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  li:{
    margin: '5px',
    fontSize: 14
  },
  button: {
    background: '#0A0F0D',
    color: '#F9F9F9',
    border: '1px solid #0A0F0D',
    padding: '0.5rem 0.7rem',
    borderradius: '7px',
    fontweight: 600,
    transition: 'background 0.2s',
  }

}));

const MAX_ITEMS = 9;
const CURRENT_ITEM = 1;
const MAX_LEFT = (MAX_ITEMS - CURRENT_ITEM) / 2;

export default function PaginationRounded({ limit, total, offset, setOffset }) {
  const classes = useStyles();
   const currentPage = offset ? offset / limit + 1 : 1;
  const countPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1)

  return (
    <Container className={classes.root} >
    
    <ul className={classes.ul}>
        {Array.from({ length: Math.min(MAX_ITEMS, countPages) })
          .map((_, index) => index + firstPage)
          .map((page) => (
            <li className={classes.li} key={page}>
              <button 
                onClick={() => setOffset((page - 1) * limit)}
                className={
                  page === currentPage ? 'current-page' : ''
                }
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    </Container>
  );
}
