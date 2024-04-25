import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBqrZAhiLrSMM2TcPblnyJwa3IhbPD_EJI",
  authDomain: "storied-mantra-421221.firebaseapp.com",
  projectId: "storied-mantra-421221",
  storageBucket: "storied-mantra-421221.appspot.com",
  messagingSenderId: "341664439923",
  appId: "1:341664439923:web:6467c31643d24ba5181406"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app , auth };
