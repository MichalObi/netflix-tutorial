import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

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

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.TextLink>{user.displayName}</Header.TextLink>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker NOW</Header.FeatureCallOut>
          <Header.Text>
            lorem impsum
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer
            user={user}
            setProfile={setProfile} />
  );
}
