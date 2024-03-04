// components/ListField.tsx
import React from 'react';
import styles from './ListField.module.css';

interface ListFieldProps {
    label: string;
    options?: string[];
    defaultValue?: string;
    required: boolean;
}

const ListField: React.FC<ListFieldProps> = ({ label, options = [], defaultValue, required }) => {
    return (
        <div className={styles.listField}>
            <label className={styles.label}>{label}</label>
            <select
                className={styles.select}
                defaultValue={defaultValue}
                required={required}
            >
                {options.length > 0 && options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default ListField;
