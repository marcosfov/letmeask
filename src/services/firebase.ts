import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/database';


// Your web app's Firebase configuration
/* para os variáveis ambientes não ficarem visíveis, foi feito o .env.local e substituído abaixo*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_IP
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const database = firebase.database();