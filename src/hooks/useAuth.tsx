import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User as FirebaseUser, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { User, UserRole } from '../utils/types';

// --- MOCK DE AUTENTICAÇÃO ---
const MOCK_USERS: Record<string, User> = {
  'adm@mock.com': { id: 'mock-adm', email: 'adm@mock.com', role: 'ADM', companyId: 'mock-company', name: 'Admin Mock' },
  'driver@mock.com': { id: 'mock-driver', email: 'driver@mock.com', role: 'DRIVER', companyId: 'mock-company', name: 'Motorista Mock' },
  'guardian@mock.com': { id: 'mock-guardian', email: 'guardian@mock.com', role: 'GUARDIAN', companyId: 'mock-company', name: 'Responsável Mock' },
  'student@mock.com': { id: 'mock-student', email: 'student@mock.com', role: 'STUDENT', companyId: 'mock-company', name: 'Aluno Mock' },
};

const MOCK_MODE = true; // Alternar para false quando o Firebase for configurado

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  role: UserRole | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (MOCK_MODE) {
      // No modo mock, simula que não há usuário logado inicialmente
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', fbUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            setUser(userData);
            setRole(userData.role);
          } else {
            console.error('User document not found in Firestore.');
            await signOut(auth);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          await signOut(auth);
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const mockLogin = async (email: string, password: string) => {
    if (MOCK_USERS[email] && password === '123456') { // Senha mockada
      const mockUser = MOCK_USERS[email];
      setUser(mockUser);
      setRole(mockUser.role);
      // Simula um FirebaseUser mínimo para manter a tipagem
      setFirebaseUser({ uid: mockUser.id, email: mockUser.email } as FirebaseUser);
    } else {
      throw new Error('Credenciais mock inválidas. Tente: adm@mock.com, driver@mock.com, guardian@mock.com, student@mock.com (senha: 123456)');
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      if (MOCK_MODE) {
        await mockLogin(email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (MOCK_MODE) {
      setUser(null);
      setRole(null);
      setFirebaseUser(null);
    } else {
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, firebaseUser, role, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
