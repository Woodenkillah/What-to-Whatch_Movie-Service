import {applyMiddleware, createStore} from 'redux';
import {reducer} from '../reducers/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from '../../axios/axios';

const api = createAPI(() => store.dispatch());

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);
