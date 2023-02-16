import React, { useState, useContext } from "react";
import Router from "next/router"
import styles from '../../styles/Login.module.css'
import { useForm } from 'react-hook-form'
import { AuthContext } from "@/contexts/AuthContext";


const Login = () => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);


  async function handleSignIn(data) {

    await signIn(data);
  }

  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Login RPG de terror</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
        <input
          className={styles.input}
          {...register("username")}
          name="username"
          type="text"
          placeholder="Usuário"
        />
        <input
          className={styles.input}
          {...register("password")}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button className={styles.button} type="submit">Entrar</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Login;