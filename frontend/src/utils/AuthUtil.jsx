// src/utils/authUtils.js
import { auth } from '../firebase'; // Adjust the import path as necessary

export function isAuthenticated() {
 return auth.currentUser !== null;
}
