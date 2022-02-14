import { useState, useEffect } from "react";

export default function UsePersistedTheme(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initialState));
  }, [key, initialState]);

  return [state, setState];
}
