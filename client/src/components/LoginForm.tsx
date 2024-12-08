import React from 'react';
import { Formik, Form, Field } from 'formik';
import { loginSchema } from '../utils/validation';
import type { LoginValues } from '../types/auth';
import { saveEmailToStorage, getStoredEmail } from '../utils/storage';
import { login } from '../utils/auth';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [apiError, setApiError] = React.useState<string | null>(null);

    const initialValues: LoginValues = {
        email: getStoredEmail(),
        password: '',
        rememberMe: false,
    };

    const handleLogin = async (values: LoginValues) => {
        try {
            setApiError(null); // Reset API error
            const data = await login(values.email, values.password);
            if (data.message) {
                alert("wrong password")
                return;
            }
            if (data.error) {
                throw new Error(data.message || 'Login failed');
            }

            console.log('Login successful:', data);
            setShowSuccess(true);

            if (values.rememberMe) {
                saveEmailToStorage(values.email);
            }

            // Additional actions can be performed here, like saving tokens
        } catch (error: any) {
            console.error('Login error:', error.message);
            setShowSuccess(false);
            setApiError(error.message || 'Something went wrong');
        } finally {
            setTimeout(() => {
                setShowSuccess(false);
                setApiError(null);
            }, 3000);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, { resetForm }) => {
                handleLogin(values);
                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form className="space-y-4" noValidate>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            aria-required="true"
                            aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        />
                        {errors.email && touched.email && (
                            <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <Field
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                aria-required="true"
                                aria-invalid={errors.password && touched.password ? 'true' : 'false'}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.password && touched.password && (
                            <p className="mt-1 text-sm text-red-600" role="alert">{errors.password}</p>
                        )}
                    </div>

                    <div className="flex items-center">
                        <Field
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Log In
                    </button>

                    {apiError && (
                        <div className="mt-4 p-4 rounded-md bg-red-50 text-red-800" role="alert">
                            {apiError}
                        </div>
                    )}

                    {showSuccess && (
                        <div className="mt-4 p-4 rounded-md bg-green-50 text-green-800" role="alert">
                            Login successful!
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
