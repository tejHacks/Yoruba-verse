import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NAME_KEY = "yoba_user_name";
const ONBOARDED_KEY = "yoba_onboarded";

interface UserContextValue {
  name: string | null;
  hasOnboarded: boolean;
  loading: boolean;
  setName: (name: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;
  resetProgress: () => Promise<void>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [name, setNameState] = useState<string | null>(null);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [storedName, storedOnboarded] = await Promise.all([
          AsyncStorage.getItem(NAME_KEY),
          AsyncStorage.getItem(ONBOARDED_KEY),
        ]);
        setNameState(storedName);
        setHasOnboarded(storedOnboarded === "true");
      } catch (e) {
        // Fail open — worst case, user sees onboarding again.
        console.warn("Yoba: failed to load stored user state", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const setName = async (newName: string) => {
    await AsyncStorage.setItem(NAME_KEY, newName);
    setNameState(newName);
  };

  const completeOnboarding = async () => {
    await AsyncStorage.setItem(ONBOARDED_KEY, "true");
    setHasOnboarded(true);
  };

  // Handy for a future "log out" / dev reset button.
  const resetProgress = async () => {
    await AsyncStorage.multiRemove([NAME_KEY, ONBOARDED_KEY]);
    setNameState(null);
    setHasOnboarded(false);
  };

  return (
    <UserContext.Provider
      value={{ name, hasOnboarded, loading, setName, completeOnboarding, resetProgress }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
