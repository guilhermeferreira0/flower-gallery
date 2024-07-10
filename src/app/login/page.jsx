'use client';

import {useFormState} from 'react-dom';
import Link from "next/link";

export default function LoginPage({ searchParams }) {
  const mode = searchParams.mode || 'login';
  const [formState, formAction] = useFormState(auth.bind(null, mode), {});

  return (
    <div className="login">
      <h2>Register</h2>
      <form action={formAction} className="register">
        {mode === 'login' && (
          <>
            <label htmlFor="">E-mail</label>
            <input type="text" name="email" id="email" />

            <label htmlFor="">Password</label>
            <input type="text" name="password" id="password" />
          </>
        )}
        {mode === 'signup' && (
            <>
              <label htmlFor="">E-mail</label>
              <input type="text" name="email" id="email" />

              <label htmlFor="">Password</label>
              <input type="text" name="password" id="password" />

              <label htmlFor="">First Name</label>
              <input type="text" name="firstName" id="name" />

              <label htmlFor="">last Name</label>
              <input type="text" name="lastName" id="last" />
            </>
          )}

        <button type="submit">
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <p>
          {mode === 'login' && <Link href='/login?mode=signup'>Create an account</Link>}
          {mode === 'signup' && <Link href='/login?mode=login'>Login with existing account</Link>}
        </p>
      </form>
    </div>
  );
}
