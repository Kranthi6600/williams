import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabaseClient";
import Loader from "../Loader";

const RequireAuth = (Component) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const { data, error } = await supabase.auth.getUser();
          if (error) throw error;

          if (!data.user) {
            router.push("/login");
          } else {
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error checking authentication:", error);
          router.push("/login");
        }
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };
};

export default RequireAuth;
