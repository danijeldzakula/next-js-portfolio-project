import { useTheme } from "next-themes";
import NonSSR from "../non-ssr/NonSSR";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <NonSSR>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme toggle">
        <span className="text">{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </NonSSR>
  );
}
