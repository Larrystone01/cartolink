import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.add(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button
        className="theme bg-gray-200/90 hover:bg-gray-300 px-2 py-2 space-x-2 rounded-[10px] cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </>
  );
}
