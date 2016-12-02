/* **********************USER AUTHENTICATION***************************** */

import { firebaseAuth, firebaseRef } from '../../../firebase';

/* Create a user with an email and password, then create the user in the db */
export function auth(email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch(error => console.log('Oops', error)) //eslint-disable-line
}

/* User Logout */
export function logout() {
  return firebaseAuth().signOut();
}

/* User Login */
export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

/* Save user to firebase database when a user is created */
export function saveUser(user) {
  return firebaseRef.child(`users/${user.uid}`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user);
}
