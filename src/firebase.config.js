import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIRE_STORAGE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_STORAGE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRE_STORAGE_PROJEC_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_STORAGE_MASSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIRE_STORAGE__APP_ID,
  measurementId: process.env.REACT_APP_FIRE_MEASUREMENT_ID
}
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);


