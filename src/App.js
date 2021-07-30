import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import Footer from './components/Footer';
import About from './screens/About';
import Services from './screens/Services';
import Blog from './screens/Blog';
import BlogDetail from './screens/BlogDetail';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Users from './screens/Users';
import Orders from './screens/Orders';
import OrderDetail from './screens/OrderDetail';
import UserDetail from './screens/UserDetail';
import TermsandCondition from './screens/TermsandCondition';
import PrivacyPolicy from './screens/PrivacyPolicy';

const App = ({history}) => {

  return (
    <div className="App">
        <Router>
        <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/BlogDetail" component={BlogDetail} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Orders" component={Orders} />
          <Route exact path="/OrderDetail/:order_id" component={OrderDetail} />
          <Route exact path="/UserDetail" component={UserDetail} />
          <Route exact path="/termsAndCondition" component={TermsandCondition} />
          <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
