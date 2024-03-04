// components/Form.tsx
import React from 'react';
import TextField from '../TextField/TextField';
import ListField from '../ListField/ListField';
import RadioField from '../RadioField/RadioField';
import jsonData from './data.json';
import styles from './FormFields.module.css'; 

const Form: React.FC = () => {
    return (
        <div className="form-container">
            <form>
                {jsonData.data.map(field => {
                    switch (field.fieldType) {
                        case 'TEXT':
                            return (
                                <TextField
                                    key={field.id}
                                    label={field.name}
                                    defaultValue={field.defaultValue}
                                    required={field.required}
                                    minLength={field.minLength}
                                    maxLength={field.maxLength}
                                />
                            );
                        case 'LIST':
                            return (
                                <ListField
                                    key={field.id}
                                    label={field.name}
                                    options={field.listOfValues}
                                    defaultValue={field.defaultValue}
                                    required={field.required}
                                />
                            );
                        case 'RADIO':
                            return (
                                <RadioField
                                    key={field.id}
                                    label={field.name}
                                    options={field.listOfValues}
                                    defaultValue={field.defaultValue}
                                    required={field.required}
                                />
                            );
                        default:
                            return null;
                    }
                })}
                <button type="submit" className={styles.submitButton}>Submit</button> 
            </form>
        </div>
    );
};

export default Form;
