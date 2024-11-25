import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css'; // Import the BEM-based CSS file
import { Link as RouterLink } from 'react-router-dom';
const Header = () => {
    const { i18n, t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);


    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <AppBar position="static" className="header">
            <Toolbar className="header__toolbar">
                <Typography variant="h6" className="header__title header__title--no-link" component={RouterLink} to="/">
                    {t('title')}
                </Typography>
                <div className="header__actions">
                    <Button 
                        color="inherit" 
                        className={`header__action-button ${currentLanguage === 'es' ? 'header__action-button--selected' : ''}`} 
                        onClick={()=>i18n.changeLanguage('es')}
                    >
                        ES
                    </Button>
                    <Button 
                        color="inherit" 
                        className={`header__action-button ${currentLanguage === 'en' ? 'header__action-button--selected' : ''}`} 
                        onClick={()=>i18n.changeLanguage('en')}
                    >
                        EN
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;