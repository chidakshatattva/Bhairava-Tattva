"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";

interface UserContextType {
  initiateId: string | null;
  username: string | null;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({ initiateId: null, username: null, logout: () => {} });

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [initiateId, setInitiateId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUsername = localStorage.getItem("initiate_username");
    const storedId = localStorage.getItem("initiate_id");

    if (storedUsername && storedId) {
      setUsername(storedUsername);
      setInitiateId(storedId);
    } else if (pathname !== "/") {
      router.push("/");
    }
  }, [pathname, router]);

  const logout = () => {
    localStorage.removeItem("initiate_username");
    localStorage.removeItem("initiate_id");
    setUsername(null);
    setInitiateId(null);
    router.push("/");
  };

  return (
    <UserContext.Provider value={{ initiateId, username, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
