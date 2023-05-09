// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDtx1fAt4w2ifZIBOpgbEnq3SaOeDlYwpg',
	authDomain: 'pets-app-3d3c1.firebaseapp.com',
	projectId: 'pets-app-3d3c1',
	storageBucket: 'pets-app-3d3c1.appspot.com',
	messagingSenderId: '339989248726',
	appId: '1:339989248726:web:abf6f3154176d6e1c32777',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
