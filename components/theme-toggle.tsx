"use client";

import { subscribe } from "diagnostics_channel";
import { useSyncExternalStore } from "react";

const storageKey = "blog-theme";
const changeEvent = "blog-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  return () => window.removeEventListener(changeEvent, callback);
}

const ThemeToggle = () => {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    () => document.documentElement.classList.contains("dark-mode"),
    () => false,
  );

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark-mode", next);
    window.dispatchEvent(new Event(changeEvent));
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {
      // Тема всё равно меняется в текущей вкладке.
    }
  }
  
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      {dark ? "Светлая тема" : "Тёмная тема"}
    </button>
  );
};

export default ThemeToggle;
