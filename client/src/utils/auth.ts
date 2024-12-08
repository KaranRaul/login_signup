export const login = async (email: string, password: string) => {
    const response = await fetch('https://login-signup-3cz3.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};
export const register = async (name: string, email: string, password: string) => {
    const response = await fetch('https://login-signup-3cz3.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });
    return response.json();
};
