import {createStore} from 'redux';

import rootreducers from './rootreducer';

import { applyMiddleware} from 'redux'
import logger from 'redux-logger'




const store= createStore(rootreducers,applyMiddleware(logger))

 

export default store