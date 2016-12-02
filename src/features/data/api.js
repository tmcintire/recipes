/* ********************* API CALLS TO FIREBASE ************************* */
import firebase, { firebaseRef } from '../../../firebase';
import store from '../../store';
import * as actions from '../data/actions';


/* Add a new recipe */
export function submitRecipeForm() {
  const formData = store.getState().data.recipeForm;
  firebaseRef.child('recipes').push().set(formData);
}

/* Fetch Recipes from firebase and set them to the redux store */
export function fetchRecipes() {
  let recipesList = {};
  firebaseRef.child('recipes').on('value', (snapshot) => {
    const recipes = snapshot.val();
    recipesList = snapshot.val();
    store.dispatch(actions.receivedRecipes(recipes));
  });
  return recipesList;
}
