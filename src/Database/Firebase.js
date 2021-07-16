import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD8D0KDnLSDwQ2hoVdsEgzdmHSW_r1TIoI',
  authDomain: 'nextassisment.firebaseapp.com',
  projectId: 'nextassisment',
  storageBucket: 'nextassisment.appspot.com',
  messagingSenderId: '213897318284',
  appId: '1:213897318284:web:a4a975e4011aaafb7b50a9',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }
