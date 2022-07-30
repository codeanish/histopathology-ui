import React from 'react';
import './App.css';
import Router from './router';
import { withAuthenticator, Button, Heading, AmplifyProvider, Authenticator, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports'
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);


function App() {

  return (
    <AmplifyProvider>
      <Authenticator>
        <Router />
      </Authenticator>
    </AmplifyProvider>
  )
}

export default App;