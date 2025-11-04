export type UserRole = 'ADM' | 'DRIVER' | 'GUARDIAN' | 'STUDENT';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  companyId: string;
  studentIds?: string[];
  guardianOf?: string[];
  name: string;
}

export interface Stop {
  id: string;
  routeId: string;
  kind: 'HOME' | 'SCHOOL';
  place: { name: string; lat: number; lng: number };
  studentIds: string[];
  order: number;
  windowTime: string; // HH:MM
}

export interface Route {
  id: string;
  companyId: string;
  vanId: string;
  date: string; // YYYY-MM-DD
  type: 'GO' | 'BACK';
  stopIds: string[];
  status: 'Rascunho' | 'Publicada' | 'Em andamento' | 'Pausada' | 'Encerrada' | 'Cancelada';
}

export interface Attendance {
  id: string;
  date: string; // YYYY-MM-DD
  studentId: string;
  willGo: boolean;
  decidedAt: string; // ISO string
  decidedBy: string; // userId
}

export interface Message {
  id: string;
  fromUserId: string;
  toIds: string[];
  text: string;
  createdAt: number; // timestamp
}

export interface NotificationToken {
  userId: string;
  tokens: string[];
}

export interface Event {
  id: string;
  routeId: string;
  stopId: string;
  type: 'BOARD' | 'UNBOARD' | 'BOARD_ALL' | 'UNBOARD_ALL';
  userId: string;
  createdAt: number; // timestamp
}

export interface Payment {
  id: string;
  ownerId: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string; // YYYY-MM-DD
}

export interface Doc {
  id: string;
  ownerId: string;
  url: string;
  kind: 'ID' | 'PROOF' | 'OTHERS';
}

export type RootStackParamList = {
  AuthStack: undefined;
  DriverTabs: undefined;
  GuardianTabs: undefined;
  StudentTabs: undefined;
  AdminStack: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type DriverTabParamList = {
  RouteToday: undefined;
  MapLive: undefined;
  DriverSettings: undefined;
};

export type GuardianTabParamList = {
  TodayConfirm: undefined;
  ETAView: undefined;
  GuardianChat: undefined;
  GuardianSettings: undefined;
};

export type StudentTabParamList = {
  Status: undefined;
  StudentChat: undefined;
  StudentSettings: undefined;
};

export type AdminStackParamList = {
  Users: undefined;
  BrandsSchools: undefined;
  DocsFinance: undefined;
  AdminSettings: undefined;
};
