import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({}),
        [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext),
          user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectProfileContainer
          user={user} setProfile={setProfile} />
}
