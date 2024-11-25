import React, { useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import i18n from '../../i18n';
import './List.css';

import harryImage from './static/harry-potter.jpg';
import hermioneImage from './static/hermione-granger.jpg';
import ronImage from './static/ron-weasley.jpg';
import dumbledoreImage from './static/albus-dumbledore.jpg';
import snapeImage from './static/severus-snape.jpg';
import malfoyImage from './static/draco-malfoy.jpg';
import { useTranslation } from 'react-i18next';

const characters = [
    {
        name: 'Harry Potter',
        image: harryImage, // Image path relative to the public folder
    },
    {
        name: 'Hermione Granger',
        image: hermioneImage, // Image path relative to the public folder
    },
    {
        name: 'Ron Weasley',
        image: ronImage, // Image path relative to the public folder
    },
    {
        name: 'Albus Dumbledore',
        image: dumbledoreImage, // Image path relative to the public folder
    },
    {
        name: 'Severus Snape',
        image: snapeImage, // Image path relative to the public folder
    },
    {
        name: 'Draco Malfoy',
        image: malfoyImage, // Image path relative to the public folder
    },
    // Add more characters as needed
];

const HarryPotterCharacters = () => {
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
        <div className="harry-potter">
            <Container maxWidth="lg">
                <Typography variant="h3" className="harry-potter__title">
                    {t('harryPotterTitle')}
                </Typography>
                <Grid container spacing={4} className="harry-potter__grid">
                    {characters.map((character, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className="harry-potter__grid-item">
                            <Paper elevation={3} className="harry-potter__card">
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="harry-potter__image"
                                />
                                <Typography variant="h6" className="harry-potter__name">
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

export default HarryPotterCharacters;
