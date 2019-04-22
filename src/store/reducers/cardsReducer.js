import {
	FETCH_CARDS,
	FETCH_CARDS_SUCCESS,
	FETCH_CARDS_FAILURE
} from '../actions/cardsActions';

const initialState = {
	cards: [],
	error: null,
	isFetchingCards: false
};

const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARDS:
			console.log('cardsReducer', state);
			return {
				...state,
				isFetchingCards: true,
				cards: action.payload,
				error: null
			};
		case FETCH_CARDS_SUCCESS:
			return {
				...state,
				cards: action.payload,
				isFetchingCards: false,
				error: null
			};
		case FETCH_CARDS_FAILURE:
			return {
				...state,
				isFetchingCards: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default cardsReducer;
