import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Login from './components/Users/Login'
import Register from './components/Users/Register'
import Profile from './components/Users/Profile'
import Recipes from './components/Recipes'
import ErrorPage from './components/Recipes/ErrorPage'
import Recipe from './components/Recipes/Recipe'
import Create from './components/Recipes/Create'
import Edit from './components/Recipes/Edit'
import BuyTicket from './components/Recipes/BuyTicket'
import LoginUser from './components/Users/LoginUser'
import LoginPrivilege from './components/LoginPrivilege/LoginPrivilege'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <BaseLayout>
                    <Route exact path='/' component = { Home } />
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/recipes" component={Recipes} />
                        <Route exact path="/errorpage" component={ErrorPage} />
                        <Route exact path="/recipes/:id" component={Recipe} />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/recipes/:id/edit" component={Edit} />
                        <Route exact path="/loginuser" component={LoginUser} />
                        <Route exact path="/loginprivilege" component={LoginPrivilege} />
                    </Switch>
                    </BaseLayout>
                        <Route exact path="/buyticket" component={BuyTicket} />
                 </BrowserRouter>
            </div>
        )
    }
}

export default App

