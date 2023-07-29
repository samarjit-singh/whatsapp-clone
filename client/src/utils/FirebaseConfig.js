import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcTphKMcwP_Q8sgDLFDSqH5Mz5Ctn7m_g",
  authDomain: "whatsapp-clone-768fa.firebaseapp.com",
  projectId: "whatsapp-clone-768fa",
  storageBucket: "whatsapp-clone-768fa.appspot.com",
  messagingSenderId: "632463459562",
  appId: "1:632463459562:web:0fb4d4ff595f2355740393",
  measurementId: "G-MVTTTM5B2J",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
