import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
//import {fetchPostsWithRedux} from './Index'

import authreducer from '../redux/authreducer'
import cityreducer from '../redux/cityreducer'


const reducers = combineReducers({
    auth: authreducer,
    city: cityreducer
})


const Index = () => {
    const store = createStore(reducers,  
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
        applyMiddleware(thunk));
        return (
            <Provider store={store}><App /></Provider>
        )

        store.subscribe(() => {
            console.log(store.getState());
        })
    }


  export default Index;