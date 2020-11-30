import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeSumate from './Views/Sumate/HomeSumate';
import Home from './Views/Home/Home';
import SumateHuertos from '../src/Views/Sumate/SumateHuertos'
import HomeRelatos from './Views/Relatos/HomeRelatos';
import SumateTrabajemos from './Views/Sumate/SumateTrabajemos';

const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path='/sumate' component={HomeSumate} />
                <Route path='/dona-huertos' component={SumateHuertos} />
                <Route path='/trabajemos' component={SumateTrabajemos} />
                <Route path='/relatos' component={HomeRelatos} /> 
                <Route path='/' component={Home} />

            </Switch>
        </BrowserRouter>

    )
}

export default Routes;