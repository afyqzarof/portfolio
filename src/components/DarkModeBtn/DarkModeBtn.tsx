import { useEffect, useState } from "react";
import "./DarkModeBtn.scss";

const DarkModeBtn = () => {
  // const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (!mode) {
      localStorage.setItem("mode", "dark");
      window.dispatchEvent(new Event("storage"));
    }
  });
  const handleMode = () => {
    const mode = localStorage.getItem("mode");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <button type="button" className="dark-btn" onClick={handleMode}>
      dark mode
    </button>
  );
};

export default DarkModeBtn;
