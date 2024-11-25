import React from 'react';
import { Button, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './mainContent.css';

const MainContent = () => {
    const { t } = useTranslation();
    return (
        <Container className="series-characters">
            <Typography variant="h4" className="series-characters__title">
                {t('mainTitle')}
            </Typography>
            <Typography variant="body1" className="series-characters__text">
                {t('mainText')}
            </Typography>
            <div className="series-characters__actions">
                <Button
                    variant="contained"
                    color="primary"
                    className="series-characters__button series-characters__button--harry-potter"
                    component={Link}
                    to="/harrypotter"
                >
                    Harry Potter
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className="series-characters__button series-characters__button--rick-and-morty"
                    component={Link}
                    to="/rickandmorty"
                >
                    Rick & Morty
                </Button>
            </div>
        </Container>
    );
};

export default MainContent;
