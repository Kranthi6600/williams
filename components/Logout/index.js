import React from "react";
import { useRouter } from "next/router";
import supabase from "../../supabaseClient";

function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    }
  };
  return (
    <button className="cs-btn cs-style1" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
