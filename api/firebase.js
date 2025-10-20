// services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Reemplaza con tu configuración de Firebase (web config)
const firebaseConfig = {
  apiKey: "AIzaSyBGY3nYgD43YRCA8Avf4om2OTgR_xiZd2M",
  authDomain: "test2025-767da.firebaseapp.com",
  projectId: "test2025-767da",
  storageBucket: "test2025-767da.firebasestorage.app",
  messagingSenderId: "306931637551",
  appId: "1:306931637551:web:edd34751cbf3460df315da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };