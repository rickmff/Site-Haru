import { useState, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const cookieValue = getCookie(key);
    if (cookieValue) {
      return JSON.parse(cookieValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
