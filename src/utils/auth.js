const USERS_KEY = 'bytespace_users';
const SESSION_KEY = 'bytespace_current_user';

// localStorage theke sob registered user niye ashe
const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

// Notun user register kore
export function registerUser({ name, email, password }) {
  const users = getUsers();
  const mail = email.trim().toLowerCase();
  if (users.some((u) => u.email === mail)) return { status: 'exists' };
  users.push({ name: name.trim(), email: mail, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { status: 'ok' };
}

// Login kore, session e user save kore
export function loginUser({ email, password }) {
  const mail = email.trim().toLowerCase();
  const user = getUsers().find((u) => u.email === mail);
  if (!user) return { status: 'no-account' };
  if (user.password !== password) return { status: 'wrong-password' };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
  return { status: 'ok', user };
}

// User logged in ki na check kore
export function isLoggedIn() {
  return !!sessionStorage.getItem(SESSION_KEY);
}

// Logout kore
export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}