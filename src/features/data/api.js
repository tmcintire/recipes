/* ********************* API CALLS TO FIREBASE ************************* */
import firebase, { firebaseRef } from '../../../firebase';
import store from '../../store';
import * as actions from '../data/actions';


/* Add a new recipe */
export function submitRecipeForm() {
  // Submit the form to firebase
  const formData = store.getState().data.recipeForm;
  const recipeKey = firebaseRef.child('recipes').push().key;
  firebaseRef.child(`recipes/${recipeKey}`).set(formData);

  /* Come back to this later */

  // const tags = formData.tags;
  // firebaseRef.child('tags').once('value', (snapshot) => {
  //   const newtags = snapshot.val();
  //
  //   if (newtags) { // check to see if there are tags
  //     /* create an array of tagnames */
  //     const tagsArray = [];
  //     Object.keys(newtags).map((i) => {
  //       const { tagName } = newtags[i];
  //       tagsArray.push(tagName);
  //     });
  //     tags.map((tag) => {
  //       const tagIndex = tagsArray.indexOf(tag);
  //       if (tagIndex !== -1) {
  //         console.log('tag does exist');
  //       }
  //     });
  //
  //   } else {
  //     console.log('no tags yet');
  //     addTags(recipeKey, tags);
  //   }
  // });
}

// function addTags(recipeKey, tags) {
//   tags.map((tag) => {
//     const tagKey = firebaseRef.child('tags').push().key;
//     firebaseRef.child(`tags/${tagKey}`).set({ tagName: tag });
//     firebaseRef.child(`tags/${tagKey}/recipes`).set({ [recipeKey]: true });
//   });
// }

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
