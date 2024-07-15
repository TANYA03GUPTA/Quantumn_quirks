import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJcnR07-qpFYlt8f4rl7r1cyoPT_TxoJc",
  authDomain: "test-myntra-39d3f.firebaseapp.com",
  projectId: "test-myntra-39d3f",
  storageBucket: "test-myntra-39d3f.appspot.com",
  messagingSenderId: "85704262138",
  appId: "1:85704262138:web:5ec57426363b5644916443",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function addQuizData(data) {
  let response = await addDoc(collection(db, "quizData"), data);
  return response;
}

export { addQuizData };
export default app;
