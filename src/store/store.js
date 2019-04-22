import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from './reducers/index';

const store = createStore(
	cardsReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
