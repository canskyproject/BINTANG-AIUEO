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
getFirestore,
doc,
setDoc,
getDoc,
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCwGlCnjTL3DfhbxWWYrQufV8_9uS7agQU",
authDomain: "bintang-aiueo.firebaseapp.com",
projectId: "bintang-aiueo",
storageBucket: "bintang-aiueo.firebasestorage.app",
messagingSenderId: "393513757252",
appId: "1:393513757252:web:c3ecdd339ecb19f615ea11"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

window.loginUser = function(email,password){

signInWithEmailAndPassword(
auth,
email,
password
)

.then(() => {

alert("Login berhasil 😄");
window.location.href = "dashboard.html";

})

.catch((error) => {

alert(error.message);

});

};

window.registerUser = function(email,password){

createUserWithEmailAndPassword(
auth,
email,
password
)

.then(async(userCredential) => {

const user = userCredential.user;

await setDoc(

doc(
firestore,
"users",
user.uid
),

{
name:"User Baru",
email:user.email,
createdAt:new Date().toISOString()
}

);

alert("Register berhasil 😄");
window.location.href = "login.html";

})

.catch((error) => {

alert(error.message);

});

};

export {
signOut,
updatePassword,
doc,
setDoc,
getDoc,
collection,
getDocs
};
