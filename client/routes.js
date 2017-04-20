import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layouts/Layout';
import NotFoundPage from './notFoundPage/components/NotFoundPage';

// authentication components
import LoginComponent from './authentication/login/LoginComponent';
import RegistrationComponent from './authentication/registration/RegistrationComponent';

import Dashboard from './dashboard/DashboardComponent';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={LoginComponent}/>
    <Route path="/login" component={LoginComponent} />
    <Route path="/registration" component={RegistrationComponent} />
    <Route path="/dashboard" component={Dashboard} />    
    <Route path="*" component={NotFoundPage}/>
  </Route>  
);

export default routes;