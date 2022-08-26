import React from 'react';
import { OptForm, Feature } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programs and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anyware. Cancel at any time.
          </Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now!</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
