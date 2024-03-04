import styles from "./page.module.css";
import React from 'react';
import Login from "@/components/Login/page";
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { TextField, Button } from '@mui/material';

// interface FormData {
//   fullName: string;
//   email: string;
//   gender: string;
// }

// interface Props {
//   onSubmit: SubmitHandler<FormData>;
// }


export default function Home() {
  return (
    <main className={styles.main}>
      
      <Login />


    </main>
  );
}
