import { useState, useEffect } from 'react';

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Formats number to currency
};

// Custom hook to manage local storage
export const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue; // Retrieves value from local storage
        } catch (error) {
            console.error(error);
            return initialValue; // Returns initial value on error
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value; // Updates stored value
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Saves to local storage
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue]; // Returns stored value and setter function
};

// Function to debounce input
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId); // Clears previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Calls the function after delay
        }, delay);
    };
};

// Function to validate email format
export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
    return regex.test(email); // Returns true if valid
};

export default { formatCurrency, useLocalStorage, debounce, validateEmail };