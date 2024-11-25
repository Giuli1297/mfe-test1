import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'; // Import the BEM-based CSS file

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
        if (typeof CustomEvent === 'function') {
            window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
        } else {
            const event = document.createEvent('CustomEvent');
            event.initCustomEvent('languageChange', true, true, { detail: lang });
            window.dispatchEvent(event);
        }
    };

    return (
        <AppBar position="static" className="header">
            <Toolbar className="header__toolbar">
                <Typography variant="h6" className="header__title">
                    {t('title')}
                </Typography>
                <div className="header__actions">
                    <Button 
                        color="inherit" 
                        className={`header__action-button ${currentLanguage === 'es' ? 'header__action-button--selected' : ''}`} 
                        onClick={() => changeLanguage('es')}
                    >
                        ES
                    </Button>
                    <Button 
                        color="inherit" 
                        className={`header__action-button ${currentLanguage === 'en' ? 'header__action-button--selected' : ''}`} 
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
