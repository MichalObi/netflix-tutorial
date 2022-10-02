import React, { useContext, useState } from 'react';
import { selectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const {firebase} = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <selectProfileContainer
          user={user} 
          setProfile={setProfile}/>;
}
