import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSMG8UgNt8LiU5H8TpnQ5S929wUA-QOGc",
  authDomain: "pr-racing-9cc68.firebaseapp.com",
  projectId: "pr-racing-9cc68",
  storageBucket: "pr-racing-9cc68.appspot.com",
  messagingSenderId: "168287493803",
  appId: "1:168287493803:web:fd85273ed2e2585dafe1ee"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };