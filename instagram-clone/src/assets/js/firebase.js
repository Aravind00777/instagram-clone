import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa-2eXqEP4CIC7rnozIGtPF0RBiEr9zo8",
  authDomain: "instgram-clone-dab91.firebaseapp.com",
  projectId: "instgram-clone-dab91",
  storageBucket: "instgram-clone-dab91.appspot.com",
  messagingSenderId: "575716086215",
  appId: "1:575716086215:web:1ed48765fc938bfc06c9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

