// src/components/common/FormValidation.js
import React from 'react';

export const Input = ({ 
    label, 
    error, 
    type = 'text', 
    required = false,
    validation = {},
    ...props 
}) => {
    const [touched, setTouched] = React.useState(false);
    const showError = touched && error;

    return (
        <div className="mb-4">
            {label && (
                <label className="block text-gray-700 mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-4 py-2 rounded-lg border ${
                    showError ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500`}
                onBlur={() => setTouched(true)}
                {...props}
                {...validation}
            />
            {showError && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export const useFormValidation = (initialState, validations) => {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});

    const validate = (name, value) => {
        const validation = validations[name];
        if (!validation) return;

        let error = '';
        if (validation.required && !value) {
            error = 'This field is required';
        } else if (validation.pattern && !validation.pattern.test(value)) {
            error = validation.message || 'Invalid format';
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
        validate(name, value);
    };

    return { values, errors, handleChange };
};
