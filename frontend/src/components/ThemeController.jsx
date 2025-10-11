import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeController = () => {
  const { theme, setTheme } = useTheme();

  const themes = ["dim", "forest", "fantasy", "autumn"];

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-primary m-1 btn-sm">
        <span className="hidden md:inline">Theme</span>
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-primary-content rounded-box z-[1] w-44 p-2 shadow-2xl right-0"
      >
        {themes.map((t) => (
          <li key={t}>
            <button
              onClick={() => setTheme(t)}
              className={`btn btn-sm btn-block btn-ghost justify-start ${
                theme === t ? "btn-active" : ""
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;
