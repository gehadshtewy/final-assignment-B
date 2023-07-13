import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrRCHNa6_RL1SShTaqpTQAr_26UpvkERg",
  authDomain: "final-assignment-b.firebaseapp.com",
  projectId: "final-assignment-b",
  storageBucket: "final-assignment-b.appspot.com",
  messagingSenderId: "15925749808",
  appId: "1:15925749808:web:d5302bcdce1534165165f5"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);