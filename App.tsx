// App.js
import { enableScreens } from 'react-native-screens';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '431263530225-nc262sdub246igmj6c3ngd17tbbms8n5.apps.googleusercontent.com',  // Este lo sacas de Firebase Console → Project Settings → OAuth Client IDs
});

enableScreens();

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}