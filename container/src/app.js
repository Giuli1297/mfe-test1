import React, {lazy, Suspense, useState, useEffect} from "react";
import {Router, Switch, Route} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';
import { LanguageProvider } from "./components/LanguageContext";


import Header from './components/Header/Header';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import MainContent from "./components/mainContent/mainContent";

const HarrypotterApp = lazy(() => import('./components/HarrypotterApp/HarrypotterApp'));
const RickandmortyApp = lazy(() => import('./components/RickandmortyApp/RickandmortyApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

export default () => {
    return (
        <LanguageProvider>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <div>
                        <Header/>
                        <Suspense fallback={<ProgressBar />}>
                            <Switch>
                                <Route path="/harrypotter" component={HarrypotterApp}/>
                                <Route path="/rickandmorty" component={RickandmortyApp}/>
                                <Route path="/" component={MainContent}/>
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </StylesProvider>
        </LanguageProvider>
    );
};