import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashboardComponent from '../component/dashboard';
import NavbarComponent from '../component/navbar';


class RouterComponent extends Component {
    render() {
        const SingleDropdown = ( lazy(() => ( import('../component/singleDropdown') )) )
        const MultiDropdown = ( lazy(() => ( import('../component/multiDropdown') )) )
        const LabelDropdown = ( lazy(() => ( import('../component/labelDropdown') )) )
        return (
            <div>
                <Router>
                    <NavbarComponent />
                    <Switch>
                        <Route path="/dashboard" component={DashboardComponent}></Route>
                        <Redirect exact from="/" to="/dashboard" />
                        
                        <Suspense fallback="Loading.....">
                            <Switch>
                                <Route path="/singleDropdown"> <SingleDropdown/> </Route>
                                <Route path="/multiDropdown"> <MultiDropdown/> </Route>
                                <Route path="/labelDropdown"> <LabelDropdown/> </Route>
                            </Switch>
                        </Suspense>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent;