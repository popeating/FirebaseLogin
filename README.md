# FirebaseLogin react-native appp skeleton

This small app is a simple MVP that showcase how to login with email using Firebase, it uses Expoand make extensive use of many react-native extensions, like react-naive-paper, expo-transaltion

## Prerequisites
- An active Firebase project with (at least) email authentication, some test users
- Expo project with the following modules installed: 
  - @react-navigation/native
  - @react-navigation/stack
  - firebase
  - i18n-js 
  - expo-localization 
  - react-native-paper
- A basic knowledge of react-native and expo
- A basic knowledge of Dark theming an app
- A basic knowledge of app localization
- A basic knowledge of app.json configuration

## Configuration
Edit app.json file adding (in 'extra' section) the configuration you get from your Firebase project

## Functionality
The app is composed by 2 main navigation stacks, the first stack holds the login screen and the signup screen, the secondo one holds the home screen for logged in user; at startup the app check if the user is already logged in and display the appropriate stack; the home screen also contain a prototype of theme switching button.

All the main function (like the signin and signout function) are located in App.js and passed to screen and components via context

## To do
Handling error Messages

If you need assistance about this project you can email me at lennaz@gmail.com
