// components/TextField.tsx
import React from 'react';
import styles from './TextField.module.css';

interface TextFieldProps {
    label: string;
    defaultValue?: string;
    required: boolean;
    minLength?: number;
    maxLength?: number; // Add maxLength prop
}

const TextField: React.FC<TextFieldProps> = ({ label, defaultValue, required, minLength, maxLength }) => {
    return (
        <div className={styles.textField}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                className={styles.input}
                defaultValue={defaultValue}
                required={required}
                minLength={minLength}
                maxLength={maxLength} // Add maxLength attribute
            />
        </div>
    );
};

export default TextField;
