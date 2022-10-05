import React, { useContext, useState } from 'react';
import { selectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const {firebase} = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <selectProfileContainerW
          user={user}
          setProfile={setProfile}/>;
}
