import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYg5mesCtuARlluuV0Ta7iDIlW3F4zAdA",
  authDomain: "crudlibros-940fb.firebaseapp.com",
  databaseURL: "https://crudlibros-940fb-default-rtdb.firebaseio.com",
  projectId: "crudlibros-940fb",
  storageBucket: "crudlibros-940fb.appspot.com",
  messagingSenderId: "784045567578",
  appId: "1:784045567578:web:82f8bc282c15defd6c3263"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}