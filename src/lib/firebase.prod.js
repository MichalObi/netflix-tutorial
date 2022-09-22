import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCeAoFbdyF_HnAsoHP9cZymHzGp4IBwVCI",
  authDomain: "netflix-tutorial-74e70.firebaseapp.com",
  projectId: "netflix-tutorial-74e70",
  storageBucket: "netflix-tutorial-74e70.appspot.com",
  messagingSenderId: "32057705923",
  appId: "1:32057705923:web:6072af2d89f7f2c1816976"
};

const firebaseDb = firebase.initializeApp(config);

seedDatabase(firebase);

export { firebaseDb };
