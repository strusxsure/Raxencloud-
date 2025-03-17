import { supabase } from "./supabase";
import { AuthError, Session, User } from "@supabase/supabase-js";

export type AuthResponse = {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
};

export async function signUp(
  email: string,
  password: string,
  fullName: string,
): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    return {
      user: data?.user || null,
      session: data?.session || null,
      error,
    };
  } catch (error) {
    console.error("Error during sign up:", error);
    return {
      user: null,
      session: null,
      error: error as AuthError,
    };
  }
}

export async function signIn(
  email: string,
  password: string,
): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return {
      user: data?.user || null,
      session: data?.session || null,
      error,
    };
  } catch (error) {
    console.error("Error during sign in:", error);
    return {
      user: null,
      session: null,
      error: error as AuthError,
    };
  }
}

export async function signOut(): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (error) {
    console.error("Error during sign out:", error);
    return { error: error as AuthError };
  }
}

export async function resetPassword(
  email: string,
): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { error };
  } catch (error) {
    console.error("Error during password reset:", error);
    return { error: error as AuthError };
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data } = await supabase.auth.getUser();
    return data?.user || null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function getCurrentSession(): Promise<Session | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data?.session || null;
  } catch (error) {
    console.error("Error getting current session:", error);
    return null;
  }
}
