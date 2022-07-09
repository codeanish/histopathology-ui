import React from 'react';
import './App.css';
import Router from './router';
import { withAuthenticator,  Button, Heading, AmplifyProvider, Authenticator, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports'
import {Amplify} from 'aws-amplify';

Amplify.configure(awsExports);


function App() {

  return(
    <AmplifyProvider>
      <Authenticator>
        <Router/>
        {/* {({signOut, user}) => {
          return(
            <div>
              {user && (
                <div>
                  <h1>{user.attributes?.email}</h1>
                  <Button onClick={signOut}>
                    <Text>Sign Out</Text>
                  </Button>
                </div>
              )}
              <Router/>
            </div>
          )
        }} */}
      </Authenticator>
    </AmplifyProvider>
  )
}

export default App;