/**
 * 应用的根组件
 */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/management/login" component={Login}></Route>
                    <Route path="/management/" component={Admin}></Route>
                </Switch>
            </BrowserRouter>);
    }

}