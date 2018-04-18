import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
require('../../scss/style.scss');
import { HashRouter } from 'react-router-dom'

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostShow from '../components/PostShow';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Posts from '../containers/posts';

//page
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';

const App=()=>(
    <div>
        <HashRouter>
            <div>
                <Header/>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/blog" component={BlogPage}/>
                <Route path="/blog/:id" component={PostShow} />
                <Route exact path="/contact" component={ContactPage} />
                <Footer/>
            </div>
        </HashRouter>
    </div>
);


export default App;
