import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwGlCnjTL3DfhbxWWYrQufV8_9uS7agQU",
  authDomain: "bintang-aiueo.firebaseapp.com",
  projectId: "bintang-aiueo",
  storageBucket: "bintang-aiueo.firebasestorage.app",
  messagingSenderId: "393513757252",
  appId: "1:393513757252:web:c3ecdd339ecb19f615ea11",
  measurementId: "G-28F909WEXB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.loginUser = function(email, password){

  signInWithEmailAndPassword(auth, email, password)

  .then(() => {

    alert("Login berhasil 😄");

    window.location.href = "dashboard.html";

  })

  .catch((error) => {

    alert(error.message);

  });

}

window.registerUser = function(email, password){

  createUserWithEmailAndPassword(auth, email, password)

  .then(() => {

    alert("Register berhasil 😄");

    window.location.href = "login.html";

  })

  .catch((error) => {

    alert(error.message);

  });

}