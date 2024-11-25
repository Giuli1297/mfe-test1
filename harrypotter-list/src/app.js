import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import List from "./components/List/List";

const generateClassName = createGenerateClassName({
    productionPrefix: "hp"
});

export default ({history}) => {
    return (
        <div>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route exact path="/harrypotter">
                            <List />
                        </Route>
                    </Switch>
                </StylesProvider>
            </Router>
        </div>
    );
};