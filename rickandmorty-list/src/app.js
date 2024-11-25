import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import ListRick from "./components/ListRM/List";

const generateClassName = createGenerateClassName({
    productionPrefix: "rm"
});

export default ({history}) => {
    return (
        <div>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route exact path="/rickandmorty">
                            <ListRick />
                        </Route>
                    </Switch>
                </StylesProvider>
            </Router>
        </div>
    );
};