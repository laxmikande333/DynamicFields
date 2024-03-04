// components/RadioField.tsx
import React from 'react';
import styles from './RadioField.module.css';

interface RadioFieldProps {
    label: string;
    options?: string[];
    defaultValue?: string;
    required: boolean;
}

const RadioField: React.FC<RadioFieldProps> = ({ label, options = [], defaultValue, required }) => {
    return (
        <div className={styles.radioGroup}>
            <label className={styles.label}>{label}</label>
            {options.map((option, index) => (
                <div key={index} className={styles.radioOption}>
                    <input
                        type="radio"
                        id={`radio-${index}`}
                        name="gender"
                        value={option}
                        defaultChecked={defaultValue === option}
                        required={required}
                    />
                    <label htmlFor={`radio-${index}`} className={styles.radioLabel}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioField;
