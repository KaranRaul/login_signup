import React from 'react';
import { Formik, Form, Field } from 'formik';
import { signUpSchema } from '../utils/validation';
import type { SignUpValues } from '../types/auth';
import { register } from '../utils/auth';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { Eye, EyeOff } from 'lucide-react';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [apiError, setApiError] = React.useState<string | null>(null);

    const initialValues: SignUpValues = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    };

    const handleSignUp = async (values: SignUpValues) => {
        try {
            setApiError(null); // Reset API error
            const data = await register(values.name, values.email, values.password);

            if (data.error || !data.success) {
                throw new Error(data.message || 'Sign up failed');
            }

            // API indicates success
            setShowSuccess(true);
            console.log('Sign up successful:', data);
        } catch (error: any) {
            setApiError(error.message || 'Something went wrong');
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={async (values, { resetForm }) => {
                await handleSignUp(values); // Wait for API response
                if (showSuccess) resetForm(); // Reset only if successful
            }}
        >
            {({ errors, touched, values }) => (
                <Form className="space-y-4" noValidate>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            aria-required="true"
                            aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                        />
                        {errors.name && touched.name && (
                            <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>
                        )}
                    </div>

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
                        <PasswordStrengthIndicator password={values.password} />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <Field
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            aria-required="true"
                            aria-invalid={errors.confirmPassword && touched.confirmPassword ? 'true' : 'false'}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600" role="alert">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>

                    {apiError && (
                        <div className="mt-4 p-4 rounded-md bg-red-50 text-red-800" role="alert">
                            {apiError}
                        </div>
                    )}

                    {showSuccess && (
                        <div className="mt-4 p-4 rounded-md bg-green-50 text-green-800" role="alert">
                            Sign up successful!
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;
