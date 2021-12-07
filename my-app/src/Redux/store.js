import {createStore} from 'redux';

import rootreducers from './rootreducer';

import { applyMiddleware} from 'redux'





const store= createStore(rootreducers,applyMiddleware())

 

export default store