import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import Simulation from '../components/simulation/Simulation'
import Operacao from '../components/operacao/Operacao'
import Sobre from '../components/sobre/about'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/simulation' component={Simulation} />
        <Route exact path='/operacao' component={Operacao} />
        <Route exact path='/about' component={Sobre} />
        <Redirect from='*' to='/' />
    </Switch>