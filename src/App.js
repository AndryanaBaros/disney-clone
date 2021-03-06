import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
