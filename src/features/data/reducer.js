import { combineReducers } from 'redux';
import * as actionTypes from './actions';

export const recipes = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVED_RECIPES:
      return {
        ...state,
        ...action.recipes,
      };
    default:
      return state;
  }
};

export const recipeForm = (state = [], action) => {
  switch (action.type) {
    case actionTypes.UPDATED_FORM_VALUES:
      return {
        ...state,
        [action.id]: action.value,
      };
    case actionTypes.UPDATED_INGREDIENT:
      if (state[action.inputType]) {
        return {
          ...state,
          [action.inputType]: {
            ...state[action.inputType],
            [action.id]: {
              ...state[action.inputType][action.id],
              [action.updateType]: action.value,
            },
          },
        };
      }
      return {
        ...state,
        [action.inputType]: {
          ...state[action.inputType],
          [action.id]: {
            [action.updateType]: action.value,
          },
        },
      };
    default:
      return state;
  }
};


export default combineReducers({
  recipes,
  recipeForm,
});
