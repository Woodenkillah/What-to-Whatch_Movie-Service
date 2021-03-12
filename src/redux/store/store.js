import {applyMiddleware, createStore} from 'redux';
import {filmsReducer} from '../film/reducer';
import {promoReducer} from '../promo/reducer';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from '../../axios/axios';

const api = createAPI();

export const store = createStore(
    combineReducers({
      films: filmsReducer,
      promo: promoReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);
