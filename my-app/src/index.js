import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import {BrowserRouter,Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import CourseHome from './Components/CourseHome';

import Enquire from './Components/Enquire'

import store from './Redux/store'

import {Provider} from 'react-redux'

ReactDOM.render(

 

<Provider store={store}>

  <BrowserRouter>

      <Route exact path="/" component = {App} />

      <Route exact path="/courses" component = {CourseHome} />

      <Route exact path='/enquire/:id' component={Enquire}/>

  </BrowserRouter>

      </Provider>

     ,

  document.getElementById('root')

);