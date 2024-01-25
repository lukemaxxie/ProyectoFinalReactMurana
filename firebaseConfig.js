import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCheIU_iucW0c31GpKtIB0g1v5gxo5RWRw",
  authDomain: "proyectofinalreactcoder-b8b9d.firebaseapp.com",
  projectId: "proyectofinalreactcoder-b8b9d",
  storageBucket: "proyectofinalreactcoder-b8b9d.appspot.com",
  messagingSenderId: "698316989554",
  appId: "1:698316989554:web:617c4e5d29694b22a80eeb"
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);
const auth = getAuth(app);

export { firebaseConfig, app, dataBase, auth };
