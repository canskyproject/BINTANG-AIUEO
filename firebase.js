import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
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

export const auth      = getAuth(app);
export const firestore = getFirestore(app);