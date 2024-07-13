'use server';
import { createUser } from "@/lib/db";
import { redirect } from "next/navigation";

export async function auth(mode, prevState, formData) {
  if (!mode || mode !== 'login' && mode !== 'login') {
    throw new Error('Error page not found!');
  }

  const email = formData.get('email');
  const password = formData.get('password');

  if (mode === 'signup') {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');

    await createUser(firstName, lastName, email, password);
    redirect('/gallery');
  }
}
