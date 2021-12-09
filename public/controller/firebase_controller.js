import * as Constant from "../model/constant.js";

export async function signIn(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signOut() {
  await firebase.auth().signOut();
}


export async function createAccount(email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
}
