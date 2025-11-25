import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAIqxufjXVmsPeWFygowpty__5LMpFbQCw",
  authDomain: "movstudio-eb656.firebaseapp.com",
  projectId: "movstudio-eb656",
  storageBucket: "movstudio-eb656.firebasestorage.app",
  messagingSenderId: "582757870278",
  appId: "1:582757870278:web:e22b94ad648e970a7ec5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;