import { useState } from "react";
import supabase from "../supabase/SupabaseConfig";

export default function Auth() {
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState();

  const handleLogin = async (email) => {
    try {
      setLoading = true;
      const { error } = await supabase.auth.signInWithPassword;
    } catch (error) {}
  };
}
