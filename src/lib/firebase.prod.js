import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {

};

const firebaseDb = firebase.initializeApp(config);

seedDatabase(firebase);

export { firebaseDb };
