import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { FIREBASE_CONFIG } from '../config/env';

// Inicializa o Firebase
const app = initializeApp(FIREBASE_CONFIG);

// Exporta os serviços que serão usados
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Opcional: para usar o Firebase no navegador (web)
// if (typeof window !== 'undefined') {
//   if (process.env.NODE_ENV === 'development') {
//     // Conectar ao emulador local em desenvolvimento
//     // connectAuthEmulator(auth, 'http://localhost:9099');
//     // connectFirestoreEmulator(db, 'localhost', 8080);
//     // connectStorageEmulator(storage, 'localhost', 9199');
//   }
// }
