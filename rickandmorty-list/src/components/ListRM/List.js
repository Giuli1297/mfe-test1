import React, { useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import i18n from '../../i18n';
import './List.css';

import rickImage from './static/rick-sanchez.jpg';
import mortyImage from './static/morty-smith.jpg';
import summerImage from './static/summer-smith.jpg';
import bethImage from './static/beth-smith.jpg';
import jerryImage from './static/jerry-smith.jpg';
import birdpersonImage from './static/birdperson.jpg';
import { useTranslation } from 'react-i18next';

const characters = [
    {
        name: 'Rick Sanchez',
        image: rickImage, // Image path relative to the public folder
    },
    {
        name: 'Morty Smith',
        image: mortyImage, // Image path relative to the public folder
    },
    {
        name: 'Summer Smith',
        image: summerImage, // Image path relative to the public folder
    },
    {
        name: 'Beth Smith',
        image: bethImage, // Image path relative to the public folder
    },
    {
        name: 'Jerry Smith',
        image: jerryImage, // Image path relative to the public folder
    },
    {
        name: 'Birdperson',
        image: birdpersonImage, // Image path relative to the public folder
    },
    // Add more characters as needed
];

const RickAndMortyCharacters = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleLanguageChange = (event) => {
          // Change language in i18next when the event is triggered
          const newLang = event.detail;
          i18n.changeLanguage(newLang);
        };
    
        // Listen for language changes from the container
        window.addEventListener('languageChanged', handleLanguageChange);
    
        // Cleanup listener when component unmounts
        return () => {
          window.removeEventListener('languageChanged', handleLanguageChange);
        };
      }, []);

    return (
        <div className="rick-and-morty">
            <Container maxWidth="lg">
                <Typography variant="h3" className="rick-and-morty__title">
                    {t('rickAndMortyTitle')}
                </Typography>
                <Grid container spacing={4} className="rick-and-morty__grid">
                    {characters.map((character, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className="rick-and-morty__grid-item">
                            <Paper elevation={3} className="rick-and-morty__card">
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="rick-and-morty__image"
                                />
                                <Typography variant="h6" className="rick-and-morty__name">
                                    {character.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default RickAndMortyCharacters;
