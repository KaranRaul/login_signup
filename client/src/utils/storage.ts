export const saveEmailToStorage = (email: string): void => {
    localStorage.setItem('rememberedEmail', email);
};

export const getStoredEmail = (): string => {
    return localStorage.getItem('rememberedEmail') || '';
};