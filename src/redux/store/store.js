import {applyMiddleware, createStore} from 'redux';
import {targetFilmReducer} from '../target-film/reducer';
import {filmsReducer} from '../films/reducer';
import {promoReducer} from '../promo/reducer';
import {authReducer} from '../auth/reducer';
import {reviewsReducer} from '../reviews/reducer';
import {favoritesReducer} from '../favorites/reducer';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {redirect} from '../middlewares/redirect';
import {createAPI} from '../../services/api';
import {ActionCreator} from '../auth/actions';
import {AuthStatuses} from '../../constants';

const api = createAPI(() => store.dispatch(ActionCreator.setAuth(AuthStatuses.NO_AUTH)));

export const store = createStore(
    combineReducers({
      auth: authReducer,
      targetFilm: targetFilmReducer,
      films: filmsReducer,
      promo: promoReducer,
      reviews: reviewsReducer,
      favorites: favoritesReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
