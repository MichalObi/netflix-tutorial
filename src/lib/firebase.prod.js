import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {
 apiKey: "",
 authDomain: "",
 projectId: "",
 storageBucket: "",
 messagingSenderId: "",
 appId: ""
};

const firebaseDb = firebase.initializeApp(config);

seedDatabase(firebase);

export { firebaseDb };
