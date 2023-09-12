import axios from 'axios';

const FIREBASE_URL = import.meta.env.VITE_FIREBASE;

export const CART_ENDPOINT = 'cart';
export const MEALS_ENDPOINT = 'meals';

export const firebaseApi = axios.create({
    baseURL: FIREBASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});