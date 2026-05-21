import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  getDatabase,
  ref,
  set,
  get

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

  apiKey: "AIzaSyCwGlCnjTL3DfhbxWWYrQufV8_9uS7agQU",

  authDomain: "bintang-aiueo.firebaseapp.com",

  databaseURL:
  "https://bintang-aiueo-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "bintang-aiueo",

  storageBucket: "bintang-aiueo.firebasestorage.app",

  messagingSenderId: "393513757252",

  appId: "1:393513757252:web:c3ecdd339ecb19f615ea11"

};

/* INITIALIZE */

const app =
initializeApp(firebaseConfig);

/* AUTH */

export const auth =
getAuth(app);

/* DATABASE */

export const db =
getDatabase(app);

/* LOGIN */

window.loginUser =
function(email,password){

  signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(() => {

    alert("Login berhasil 😄");

    window.location.href =
    "dashboard.html";

  })

  .catch((error) => {

    alert(error.message);

  });

}

/* REGISTER */

window.registerUser =
function(email,password){

  createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(async(userCredential) => {

    const user =
    userCredential.user;

    await set(

      ref(db,"users/" + user.uid),

      {

        name:"User Baru",

        email:user.email

      }

    );

    alert("Register berhasil 😄");

    window.location.href =
    "login.html";

  })

  .catch((error) => {

    alert(error.message);

  });

}

/* EXPORT */

export {

  signOut,
  updatePassword,
  ref,
  set,
  get

};